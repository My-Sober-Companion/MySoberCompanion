import * as React from 'react';
import { StyleSheet} from 'react-native';
import { List } from 'react-native-paper';

export interface AccordionProps {
    children: JSX.Element;
    title: React.ReactNode;
  }
const Accordion: React.FC<AccordionProps> = ({children, title}) => {
//   const [expanded, setExpanded] = React.useState(true);

//   const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section>
      <List.Accordion title={title} titleStyle={styles.title}>
        {children}
      </List.Accordion>
    </List.Section>
  );
};

export default Accordion;

const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: 'bold',
       marginVertical: 8,
    },
  });
  