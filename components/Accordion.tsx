import * as React from 'react';
import { StyleProp, StyleSheet, ViewStyle} from 'react-native';
import { View } from 'react-native-animatable';
import { List } from 'react-native-paper';

export interface AccordionProps {
  children: JSX.Element;
  title: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Accordion: React.FC<AccordionProps> = ({children, title, style}) => {
  return (
    <View style={styles.AccordionView}>
      <List.Section>
        <List.Accordion title={title} titleStyle={styles.title}>
            {children}
        </List.Accordion>
      </List.Section>
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  AccordionView: {
    width: '85%',
  },
});
  