import React from 'react';
import { FlatList } from 'react-native';
import { AssignmentItem } from './AssignmentItem';

export const AssignmentList = ({ assignments, onOpenLink, onToggleComplete }) => {
  return (
    <FlatList
      data={assignments}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <AssignmentItem
          assignment={item}
          onOpenLink={onOpenLink}
          onToggleComplete={onToggleComplete}
        />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};
