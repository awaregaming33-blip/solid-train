import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const formatDueDate = (dueDate) => {
  if (!dueDate) {
    return 'Date unavailable';
  }

  const date = new Date(dueDate);
  if (Number.isNaN(date.getTime())) {
    return 'Date unavailable';
  }

  return date.toISOString().slice(0, 10);
};

export const AssignmentItem = ({ assignment, onOpenLink, onToggleComplete }) => {
  const isCompleted = assignment.isCompleted;

  return (
    <Pressable
      onPress={() => onOpenLink(assignment.canvasUrl)}
      style={[styles.card, isCompleted && styles.completedCard]}
    >
      <View style={styles.topRow}>
        <Text style={styles.course}>{assignment.course}</Text>
        <Text style={styles.dueDate}>Due: {formatDueDate(assignment.dueDate)}</Text>
      </View>

      <View style={styles.bottomRow}>
        <Text style={styles.title}>{assignment.title}</Text>
        <Pressable
          accessibilityLabel={`Toggle completion for ${assignment.title}`}
          onPress={(event) => {
            event.stopPropagation();
            onToggleComplete(assignment.id);
          }}
          style={[styles.checkbox, isCompleted && styles.checkboxChecked]}
        >
          <Text style={styles.checkboxText}>{isCompleted ? '✓' : ''}</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E6E6E6',
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
    padding: 14
  },
  completedCard: {
    opacity: 0.35
  },
  topRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  bottomRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  course: {
    color: '#777777',
    fontSize: 14,
    fontWeight: '400'
  },
  title: {
    color: '#333333',
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    marginRight: 12
  },
  dueDate: {
    color: '#777777',
    fontSize: 12,
    fontWeight: '300'
  },
  checkbox: {
    alignItems: 'center',
    borderColor: '#AEB7C1',
    borderRadius: 6,
    borderWidth: 1,
    height: 28,
    justifyContent: 'center',
    width: 28
  },
  checkboxChecked: {
    backgroundColor: '#4A90E2',
    borderColor: '#4A90E2'
  },
  checkboxText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700'
  }
});
