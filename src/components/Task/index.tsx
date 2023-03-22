import { TouchableOpacity, View, Text } from "react-native";
import { Check, Trash } from 'phosphor-react-native'
import { styles } from "./styles";

interface TaskProps{
    id: string;
    content: string;
    isComplete: boolean
    onDeleteTask: (id: string) => void;
    onTaskComplete: (id: string) => void;
}

export function Task({id, content, isComplete, onDeleteTask, onTaskComplete}: TaskProps ) {

    function handleDeleteTask(){
        onDeleteTask(id);
    }

    function handleTaskCompleted(){
        onTaskComplete(id)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleTaskCompleted} style={styles.checkboxContainer}>
                <View style={isComplete ? styles.checkboxComplete : styles.checkboxNoComplete}>
                    <Check size={14} color={isComplete ? "#f2f2f2" : "transparent"} />
                </View>
            </TouchableOpacity>
            <Text style={isComplete ? styles.descriptionComplete : styles.descriptionNoComplete}>
                {content}
            </Text>
            <TouchableOpacity onPress={handleDeleteTask} style={styles.bin}>
                <Text>
                    <Trash size={22} color="#d9d9d9" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}