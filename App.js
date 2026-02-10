import React, { useMemo, useState } from 'react';
import { Alert, Linking, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { AssignmentList } from './components/AssignmentList';
import { ProgressSlider } from './components/ProgressSlider';
import { mockAssignments } from './data/mockAssignments';
import { sortAssignments } from './utils/sortAssignments';

export default function App() {
  const [assignments, setAssignments] = useState(mockAssignments);

  const sortedAssignments = useMemo(() => sortAssignments(assignments), [assignments]);

  // Progress is dynamically derived from assignment state every render.
  const completionPercentage = useMemo(() => {
    if (assignments.length === 0) {
      return 0;
    }

    const completedCount = assignments.filter((item) => item.isCompleted).length;
    return (completedCount / assignments.length) * 100;
  }, [assignments]);

  const toggleCompletion = (assignmentId) => {
    setAssignments((previousAssignments) =>
      previousAssignments.map((assignment) =>
        assignment.id === assignmentId
          ? { ...assignment, isCompleted: !assignment.isCompleted }
          : assignment
      )
    );
  };

  const openCanvasLink = async (canvasUrl) => {
    try {
      const supported = await Linking.canOpenURL(canvasUrl);
      if (!supported) {
        Alert.alert('Unable to open link', 'This assignment link is not supported on this device.');
        return;
      }

      await Linking.openURL(canvasUrl);
    } catch (error) {
      Alert.alert('Unable to open link', 'Please try again in a moment.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.title}>ScheduStudent</Text>
        <ProgressSlider percentage={completionPercentage} />
        <AssignmentList
          assignments={sortedAssignments}
          onOpenLink={openCanvasLink}
          onToggleComplete={toggleCompletion}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20
  },
  title: {
    alignSelf: 'center',
    color: '#333333',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 18
  }
});
