import React, {useEffect, useMemo, useState} from 'react';
import {Image, Modal, Pressable, StyleSheet, Text, useWindowDimensions, View} from 'react-native';

import {assets} from '../assets';
import {ActionButton} from '../components/ActionButton';
import {GlassPanel} from '../components/GlassPanel';
import {ScreenScaffold} from '../components/ScreenScaffold';
import {quizLevels} from '../data/quizzes';
import {getIsSmallScreen, getIsTinyScreen} from '../layout';
import {loadQuizLevelIndex, storeQuizLevelIndex} from '../storage/appStorage';
import {colors, text} from '../theme';

type QuizScreenProps = {
  bottomPadding: number;
  topPadding: number;
};

const passScore = 4;

export function QuizScreen({bottomPadding, topPadding}: QuizScreenProps) {
  const {height, width} = useWindowDimensions();
  const compact = getIsSmallScreen(width, height);
  const tiny = getIsTinyScreen(width, height);
  const [ready, setReady] = useState(false);
  const [levelIndex, setLevelIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [resultVisible, setResultVisible] = useState(false);

  useEffect(() => {
    let mounted = true;

    loadQuizLevelIndex()
      .then(index => {
        if (mounted) {
          setLevelIndex(Math.min(index, quizLevels.length - 1));
        }
      })
      .finally(() => {
        if (mounted) {
          setReady(true);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  const level = quizLevels[levelIndex] ?? quizLevels[0];
  const question = level.questions[questionIndex] ?? level.questions[0];
  const answered = selectedIndex !== null;
  const visualImage = question.image ? assets[question.image] : undefined;
  const hasVisualImage = visualImage !== undefined;
  const finalQuestion = questionIndex === level.questions.length - 1;
  const finalLevel = levelIndex === quizLevels.length - 1;
  const passed = score >= passScore;

  const progress = useMemo(
    () => `${questionIndex + 1}/${level.questions.length}`,
    [level.questions.length, questionIndex],
  );

  const resetRound = () => {
    setQuestionIndex(0);
    setSelectedIndex(null);
    setScore(0);
    setResultVisible(false);
  };

  const selectAnswer = (index: number) => {
    if (answered) {
      return;
    }

    setSelectedIndex(index);
    if (index === question.answerIndex) {
      setScore(current => current + 1);
    }
  };

  const nextQuestion = () => {
    if (!answered) {
      return;
    }

    if (finalQuestion) {
      setResultVisible(true);
      return;
    }

    setQuestionIndex(current => current + 1);
    setSelectedIndex(null);
  };

  const nextRound = () => {
    const nextIndex = Math.min(levelIndex + 1, quizLevels.length - 1);
    storeQuizLevelIndex(nextIndex);
    setLevelIndex(nextIndex);
    resetRound();
  };

  const exitQuiz = () => {
    resetRound();
  };

  return (
    <ScreenScaffold
      background={assets.quizCommand}
      bottomPadding={bottomPadding}
      topPadding={topPadding}>
      <View style={[styles.header, compact && styles.compactHeader, tiny && styles.tinyHeader]}>
        <Text style={text.eyebrow}>Polar quiz</Text>
        <Text style={[styles.title, compact && styles.compactTitle, tiny && styles.tinyTitle]}>
          Round challenge
        </Text>
      </View>

      {!ready ? (
        <GlassPanel strong style={styles.loadingPanel}>
          <Text style={styles.loadingText}>Loading round</Text>
        </GlassPanel>
      ) : (
        <GlassPanel
          strong
          style={[
            styles.quizPanel,
            compact && styles.compactQuizPanel,
            tiny && styles.tinyQuizPanel,
          ]}>
          <View style={styles.quizTop}>
            <View style={styles.roundCopy}>
              <Text style={styles.roundKicker}>
                Round {levelIndex + 1} of {quizLevels.length}
              </Text>
              <Text numberOfLines={2} style={styles.levelTitle}>
                {level.title}
              </Text>
            </View>
            <View style={styles.progressBadge}>
              <Text style={styles.progressText}>{progress}</Text>
            </View>
          </View>

          <View
            style={[
              styles.promptCard,
              compact && styles.compactPromptCard,
              tiny && styles.tinyPromptCard,
              hasVisualImage && styles.visualPromptCard,
            ]}>
            {hasVisualImage ? (
              <View
                style={[
                  styles.visualImageFrame,
                  compact && styles.compactVisualImageFrame,
                  tiny && styles.tinyVisualImageFrame,
                ]}>
                <Image
                  source={visualImage}
                  resizeMode="contain"
                  style={styles.visualPromptImage}
                />
              </View>
            ) : (
              <Image
                source={assets.questionPanel}
                resizeMode="contain"
                style={styles.promptImage}
              />
            )}
            <View
              style={[
                styles.promptCopy,
                hasVisualImage && styles.visualPromptCopy,
              ]}>
              <Text
                style={[
                  styles.question,
                  compact && styles.compactQuestion,
                  tiny && styles.tinyQuestion,
                ]}>
                {question.question}
              </Text>
              {question.imagePrompt && !hasVisualImage ? (
                <Text style={styles.imagePrompt}>{question.imagePrompt}</Text>
              ) : null}
            </View>
          </View>

          <View
            style={[styles.options, compact && styles.compactOptions, tiny && styles.tinyOptions]}>
            {question.options.map((option, index) => {
              const isCorrectOption = index === question.answerIndex;
              const isSelected = selectedIndex === index;
              const highlightedCorrect = answered && isCorrectOption;
              const highlightedWrong = answered && isSelected && !isCorrectOption;

              return (
                <Pressable
                  accessibilityRole="button"
                  key={option}
                  onPress={() => selectAnswer(index)}
                  style={[
                    styles.option,
                    compact && styles.compactOption,
                    tiny && styles.tinyOption,
                    highlightedCorrect && styles.correctOption,
                    highlightedWrong && styles.wrongOption,
                  ]}>
                  <Text style={styles.optionLetter}>{String.fromCharCode(65 + index)}</Text>
                  <Text style={styles.optionText}>{option}</Text>
                </Pressable>
              );
            })}
          </View>

          <View style={styles.resultRow}>
            <Text style={styles.score}>Score {score}</Text>
            {answered ? (
              <Text
                style={[
                  styles.result,
                  selectedIndex === question.answerIndex ? styles.correctText : styles.wrongText,
                ]}>
                {selectedIndex === question.answerIndex ? 'Correct' : 'Review'}
              </Text>
            ) : null}
          </View>

          <ActionButton
            icon="➜"
            label={!answered ? 'Choose answer' : finalQuestion ? 'Finish round' : 'Next'}
            onPress={nextQuestion}
            variant={answered ? 'primary' : 'quiet'}
          />
        </GlassPanel>
      )}

      <Modal animationType="fade" transparent visible={resultVisible} onRequestClose={exitQuiz}>
        <View style={styles.modalBackdrop}>
          <GlassPanel strong style={styles.resultPanel}>
            <Text style={styles.resultTitle}>
              {passed ? 'Round passed' : 'Try again'}
            </Text>
            <Text style={styles.resultScore}>{score}/5 correct</Text>
            <Text style={styles.resultCopy}>
              {passed
                ? finalLevel
                  ? 'You completed the final round.'
                  : 'You can continue to the next round or exit.'
                : 'You need at least 4 correct answers to unlock the next round.'}
            </Text>
            <View style={styles.resultActions}>
              {passed && !finalLevel ? (
                <ActionButton icon="➜" label="Next round" onPress={nextRound} />
              ) : null}
              {passed && finalLevel ? (
                <ActionButton icon="★" label="Finish" onPress={exitQuiz} />
              ) : null}
              {!passed ? (
                <ActionButton icon="↻" label="Try again" onPress={resetRound} />
              ) : null}
              <ActionButton icon="✕" label="Exit" onPress={exitQuiz} variant="quiet" />
            </View>
          </GlassPanel>
        </View>
      </Modal>
    </ScreenScaffold>
  );
}

const styles = StyleSheet.create({
  compactHeader: {
    gap: 6,
    marginBottom: 10,
  },
  compactOption: {
    minHeight: 46,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  compactOptions: {
    gap: 7,
    marginTop: 10,
  },
  compactPromptCard: {
    gap: 8,
    padding: 8,
  },
  compactQuestion: {
    fontSize: 16,
    lineHeight: 21,
  },
  compactQuizPanel: {
    padding: 9,
  },
  compactTitle: {
    fontSize: 23,
  },
  compactVisualImageFrame: {
    height: 92,
    width: 122,
  },
  correctOption: {
    backgroundColor: 'rgba(110, 242, 194, 0.18)',
    borderColor: colors.mint,
  },
  correctText: {
    color: colors.mint,
  },
  header: {
    gap: 8,
    marginBottom: 10,
  },
  imagePrompt: {
    color: colors.muted,
    fontSize: 13,
    letterSpacing: 0,
    lineHeight: 19,
    marginTop: 8,
  },
  levelTitle: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '900',
    letterSpacing: 0,
    lineHeight: 22,
  },
  loadingPanel: {
    alignItems: 'center',
    minHeight: 220,
    justifyContent: 'center',
    padding: 18,
  },
  loadingText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0,
  },
  modalBackdrop: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.68)',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  option: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.07)',
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 10,
    minHeight: 46,
    paddingHorizontal: 11,
    paddingVertical: 7,
  },
  optionLetter: {
    color: colors.ice,
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0,
    width: 22,
  },
  options: {
    gap: 7,
    marginTop: 10,
  },
  optionText: {
    color: colors.white,
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 19,
  },
  progressBadge: {
    alignItems: 'center',
    backgroundColor: 'rgba(158, 231, 255, 0.12)',
    borderColor: 'rgba(158, 231, 255, 0.28)',
    borderRadius: 8,
    borderWidth: 1,
    minWidth: 52,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },
  progressText: {
    color: colors.ice,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0,
  },
  promptCard: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderColor: colors.line,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    minHeight: 0,
    padding: 10,
  },
  promptCopy: {
    flex: 1,
    minWidth: 0,
  },
  promptImage: {
    height: 94,
    width: 94,
  },
  question: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '900',
    letterSpacing: 0,
    lineHeight: 22,
  },
  quizPanel: {
    padding: 12,
  },
  quizTop: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  result: {
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0,
  },
  resultActions: {
    gap: 10,
    marginTop: 18,
    width: '100%',
  },
  resultCopy: {
    color: colors.muted,
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  resultPanel: {
    alignItems: 'center',
    maxWidth: 360,
    padding: 18,
    width: '100%',
  },
  resultRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10,
  },
  resultScore: {
    color: colors.ice,
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: 0,
    marginTop: 8,
  },
  resultTitle: {
    color: colors.white,
    fontSize: 25,
    fontWeight: '900',
    letterSpacing: 0,
    textAlign: 'center',
  },
  roundCopy: {
    flex: 1,
    minWidth: 0,
  },
  roundKicker: {
    color: colors.ice,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  score: {
    color: colors.amber,
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0,
  },
  tinyHeader: {
    marginBottom: 8,
  },
  tinyOption: {
    minHeight: 38,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },
  tinyOptions: {
    gap: 6,
    marginTop: 8,
  },
  tinyPromptCard: {
    gap: 8,
    marginTop: 8,
    padding: 8,
  },
  tinyQuestion: {
    fontSize: 14,
    lineHeight: 18,
  },
  tinyQuizPanel: {
    padding: 8,
  },
  tinyTitle: {
    fontSize: 22,
  },
  tinyVisualImageFrame: {
    height: 72,
    width: 96,
  },
  title: {
    ...text.title,
    fontSize: 26,
  },
  visualImageFrame: {
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderRadius: 8,
    height: 128,
    overflow: 'hidden',
    width: 170,
  },
  visualPromptCard: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  visualPromptCopy: {
    flex: 1,
    minWidth: 0,
  },
  visualPromptImage: {
    height: '100%',
    width: '100%',
  },
  wrongOption: {
    backgroundColor: 'rgba(239, 78, 90, 0.18)',
    borderColor: colors.red,
  },
  wrongText: {
    color: colors.red,
  },
});
