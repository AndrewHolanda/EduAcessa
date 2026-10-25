import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import BottomNavigation from '../../components/BottomNavigation';
import { COLORS, styles } from './style';

type Question = {
  id: number;
  statement: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

type ActivityDetailsProps = {
  onBack?: () => void;
};

const questions: Question[] = [
  {
    id: 1,
    statement: 'Quanto é 25 + 17?',
    options: ['32', '42', '43', '52'],
    correctAnswer: 1,
    explanation: '25 + 17 = 42.',
  },
  {
    id: 2,
    statement: 'Qual é o resultado de 8 × 7?',
    options: ['54', '48', '56', '64'],
    correctAnswer: 2,
    explanation: '8 multiplicado por 7 é igual a 56.',
  },
  {
    id: 3,
    statement: 'Quanto é a metade de 90?',
    options: ['35', '40', '45', '50'],
    correctAnswer: 2,
    explanation: 'A metade de 90 é 90 ÷ 2 = 45.',
  },
  {
    id: 4,
    statement: 'Qual fração representa metade de um todo?',
    options: ['1/3', '1/4', '2/3', '1/2'],
    correctAnswer: 3,
    explanation: 'A fração 1/2 representa uma de duas partes iguais.',
  },
  {
    id: 5,
    statement: 'Um caderno custa R$ 12. Quanto custam 3 cadernos?',
    options: ['R$ 24', 'R$ 30', 'R$ 36', 'R$ 42'],
    correctAnswer: 2,
    explanation: '3 × R$ 12 = R$ 36.',
  },
];

export default function ActivityDetails({ onBack }: ActivityDetailsProps) {
  const { width } = useWindowDimensions();
  const isWideScreen = width >= 768;

  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / questions.length) * 100;

  const correctCount = questions.filter(
    (question) => answers[question.id] === question.correctAnswer
  ).length;

  const handleSelectAnswer = (questionId: number, optionIndex: number) => {
    if (submitted) {
      return;
    }

    setAnswers((previous) => ({
      ...previous,
      [questionId]: optionIndex,
    }));
  };

  const handleSubmit = () => {
    if (answeredCount !== questions.length || submitted) {
      return;
    }

    setSubmitted(true);
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps='handled'
      >
        <View style={[styles.content, isWideScreen && styles.contentWide]}>
          {/* Cabeçalho */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={onBack}
              disabled={!onBack}
              accessibilityRole='button'
              accessibilityLabel='Voltar para atividades'
              accessibilityState={{ disabled: !onBack }}
            >
              <Ionicons
                name='arrow-back'
                size={22}
                color={onBack ? COLORS.blue : COLORS.muted}
              />
            </TouchableOpacity>

            <View style={styles.headerTextContainer}>
              <Text style={styles.headerEyebrow}>MINHAS ATIVIDADES</Text>
              <Text style={styles.pageTitle}>Detalhes da atividade</Text>
            </View>
          </View>

          {/* Informações da atividade */}
          <View style={styles.activityIntro}>
            <View style={styles.activityIntroTop}>
              <View style={styles.subjectIcon}>
                <Ionicons
                  name='calculator-outline'
                  size={28}
                  color={COLORS.blue}
                />
              </View>

              <View style={styles.introTitleContainer}>
                <Text style={styles.subjectLabel}>MATEMÁTICA</Text>
                <Text style={styles.activityTitle}>
                  Exercícios de Matemática
                </Text>
              </View>
            </View>

            <Text style={styles.activityDescription}>
              Coloque seus conhecimentos em prática. Leia cada questão com
              atenção, selecione uma alternativa e confira suas respostas antes
              de finalizar.
            </Text>

            <View style={styles.metadataRow}>
              <View style={styles.metadataItem}>
                <Ionicons
                  name='list-outline'
                  size={17}
                  color={COLORS.secondaryText}
                />
                <Text style={styles.metadataText}>
                  {questions.length} questões
                </Text>
              </View>

              <View style={styles.metadataItem}>
                <Ionicons
                  name='checkmark-circle-outline'
                  size={17}
                  color={COLORS.secondaryText}
                />
                <Text style={styles.metadataText}>Múltipla escolha</Text>
              </View>
            </View>
          </View>

          {/* Progresso */}
          <View style={styles.progressCard}>
            <View style={styles.progressHeader}>
              <View style={styles.progressTitleContainer}>
                <Text style={styles.progressTitle}>Seu progresso</Text>
                <Text style={styles.progressSubtitle}>
                  {answeredCount} de {questions.length} questões respondidas
                </Text>
              </View>

              <Text style={styles.progressPercentage}>
                {Math.round(progress)}%
              </Text>
            </View>

            <View
              style={styles.progressTrack}
              accessibilityRole='progressbar'
              accessibilityValue={{
                min: 0,
                max: 100,
                now: Math.round(progress),
              }}
            >
              <View style={[styles.progressFill, { width: `${progress}%` }]} />
            </View>
          </View>

          {/* Orientações */}
          <View style={styles.instructionBox}>
            <Ionicons
              name='information-circle-outline'
              size={22}
              color={COLORS.blue}
            />

            <View style={styles.instructionTextContainer}>
              <Text style={styles.instructionTitle}>Antes de começar</Text>
              <Text style={styles.instructionText}>
                Responda a todas as questões. Após o envio, suas respostas serão
                corrigidas nesta demonstração e você poderá consultar o
                resultado.
              </Text>
            </View>
          </View>

          {/* Questões */}
          <View style={styles.questionsSection}>
            <View style={styles.questionsHeader}>
              <Text style={styles.sectionTitle}>Questões</Text>

              <Text style={styles.questionsCount}>
                {questions.length} questões
              </Text>
            </View>

            {questions.map((question) => {
              const selectedAnswer = answers[question.id];
              const isAnswered = selectedAnswer !== undefined;
              const isCorrect =
                submitted && selectedAnswer === question.correctAnswer;

              return (
                <View key={question.id} style={styles.questionCard}>
                  <View style={styles.questionHeader}>
                    <View style={styles.questionNumber}>
                      <Text style={styles.questionNumberText}>
                        {String(question.id).padStart(2, '0')}
                      </Text>
                    </View>

                    <View style={styles.questionHeading}>
                      <Text style={styles.questionLabel}>
                        QUESTÃO {question.id}
                      </Text>
                      <Text style={styles.questionStatus}>
                        {submitted
                          ? isCorrect
                            ? 'Resposta correta'
                            : 'Resposta incorreta'
                          : isAnswered
                            ? 'Respondida'
                            : 'Não respondida'}
                      </Text>
                    </View>

                    {submitted && (
                      <Ionicons
                        name={isCorrect ? 'checkmark-circle' : 'close-circle'}
                        size={23}
                        color={isCorrect ? COLORS.green : COLORS.red}
                      />
                    )}
                  </View>

                  <Text style={styles.questionStatement}>
                    {question.statement}
                  </Text>

                  <View style={styles.optionsList}>
                    {question.options.map((option, index) => {
                      const selected = selectedAnswer === index;
                      const correctOption =
                        submitted && index === question.correctAnswer;
                      const incorrectSelection =
                        submitted && selected && !correctOption;

                      return (
                        <TouchableOpacity
                          key={`${question.id}-${index}`}
                          style={[
                            styles.optionButton,
                            selected && !submitted && styles.optionSelected,
                            correctOption && styles.optionCorrect,
                            incorrectSelection && styles.optionIncorrect,
                          ]}
                          onPress={() => handleSelectAnswer(question.id, index)}
                          disabled={submitted}
                          accessibilityRole='radio'
                          accessibilityLabel={`Alternativa ${String.fromCharCode(
                            65 + index
                          )}: ${option}`}
                          accessibilityState={{
                            selected,
                            disabled: submitted,
                          }}
                        >
                          <View
                            style={[
                              styles.optionLetter,
                              selected &&
                                !submitted &&
                                styles.optionLetterSelected,
                              correctOption && styles.optionLetterCorrect,
                              incorrectSelection &&
                                styles.optionLetterIncorrect,
                            ]}
                          >
                            <Text
                              style={[
                                styles.optionLetterText,
                                (selected || correctOption) &&
                                  styles.optionLetterTextSelected,
                              ]}
                            >
                              {String.fromCharCode(65 + index)}
                            </Text>
                          </View>

                          <Text style={styles.optionText}>{option}</Text>

                          {selected && !submitted && (
                            <Ionicons
                              name='checkmark-circle'
                              size={20}
                              color={COLORS.blue}
                            />
                          )}

                          {correctOption && (
                            <Ionicons
                              name='checkmark-circle'
                              size={20}
                              color={COLORS.green}
                            />
                          )}

                          {incorrectSelection && (
                            <Ionicons
                              name='close-circle'
                              size={20}
                              color={COLORS.red}
                            />
                          )}
                        </TouchableOpacity>
                      );
                    })}
                  </View>

                  {submitted && (
                    <View
                      style={[
                        styles.explanationBox,
                        isCorrect
                          ? styles.explanationCorrect
                          : styles.explanationIncorrect,
                      ]}
                    >
                      <Text
                        style={[
                          styles.explanationTitle,
                          {
                            color: isCorrect ? COLORS.green : COLORS.red,
                          },
                        ]}
                      >
                        {isCorrect ? 'Muito bem!' : 'Vamos aprender juntos'}
                      </Text>

                      <Text style={styles.explanationText}>
                        {question.explanation}
                      </Text>
                    </View>
                  )}
                </View>
              );
            })}
          </View>

          {/* Resultado */}
          {submitted && (
            <View style={styles.resultCard}>
              <View style={styles.resultIcon}>
                <Ionicons name='trophy-outline' size={30} color={COLORS.blue} />
              </View>

              <Text style={styles.resultTitle}>Atividade finalizada!</Text>

              <Text style={styles.resultScore}>
                {correctCount} de {questions.length} acertos
              </Text>

              <Text style={styles.resultDescription}>
                Você acertou{' '}
                {Math.round((correctCount / questions.length) * 100)}% das
                questões. Revise as explicações e continue praticando.
              </Text>

              <TouchableOpacity
                style={styles.retryButton}
                onPress={handleRetry}
                accessibilityRole='button'
              >
                <Ionicons
                  name='refresh-outline'
                  size={19}
                  color={COLORS.blue}
                />
                <Text style={styles.retryButtonText}>Refazer atividade</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Envio */}
          {!submitted && (
            <View style={styles.submitSection}>
              {answeredCount < questions.length && (
                <View style={styles.warningBox}>
                  <Ionicons
                    name='alert-circle-outline'
                    size={19}
                    color={COLORS.warning}
                  />

                  <Text style={styles.warningText}>
                    Faltam {questions.length - answeredCount}{' '}
                    {questions.length - answeredCount === 1
                      ? 'questão'
                      : 'questões'}{' '}
                    para responder.
                  </Text>
                </View>
              )}

              <TouchableOpacity
                style={[
                  styles.submitButton,
                  answeredCount !== questions.length &&
                    styles.submitButtonDisabled,
                ]}
                onPress={handleSubmit}
                disabled={answeredCount !== questions.length}
                accessibilityRole='button'
              >
                <Text style={styles.submitButtonText}>Enviar respostas</Text>

                <Ionicons name='send-outline' size={18} color={COLORS.white} />
              </TouchableOpacity>

              <Text style={styles.submitHint}>
                Confira suas respostas antes de finalizar.
              </Text>
            </View>
          )}

          <Text style={styles.footerMessage}>
            EduAcessa · Aprender é construir novas possibilidades.
          </Text>
        </View>
      </ScrollView>

      <BottomNavigation activeTab='atividades' />
    </View>
  );
}
