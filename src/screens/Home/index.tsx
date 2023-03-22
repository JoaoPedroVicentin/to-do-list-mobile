import { useState } from 'react'
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Task } from "../../components/Task";
import { PlusCircle } from 'phosphor-react-native'
import { styles } from "./styles";

type TaskProps = {
    id: string,
    content: string,
    isComplete: boolean
}

export function Home() {

    const [tasks, setTasks] = useState<TaskProps[]>([])

    const [newTaskText, setNewTaskText] = useState('')

    const tasksCompleted = tasks.filter(task => {
        return task.isComplete === true
    })

    function handleCreateNewTask() {

        const newTask = {
            id: `${new Date()}`,
            content: newTaskText,
            isComplete: false
        }

        if (newTaskText != '') {
            setTasks(prevState => [newTask, ...prevState]);
        } else Alert.alert("Campo obrigatório!", "Digite um valor válido.");

        setNewTaskText('');
    }

    function handleTaskRemove(id: string) {
        Alert.alert("Remover", `Deseja remover esta tarefa?`, [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(task => task.id !== id))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    function taskComplete(id: string) {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                task.isComplete = !task.isComplete
            } return task
        })

        setTasks(updatedTasks)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../assets/Logo.png')} style={styles.logo} />
            </View>


            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                    onChangeText={setNewTaskText}
                    value={newTaskText}
                />

                <TouchableOpacity style={styles.button} onPress={handleCreateNewTask} >
                    <Text style={styles.buttonText}>
                        <PlusCircle color='#f2f2f2' />
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tasksInfos}>
                <View style={styles.tasksInfo}>
                    <Text style={styles.created}>Criadas</Text>
                    <View style={styles.value}>
                        <Text style={{ color: '#D9D9D9' }}>{tasks.length}</Text>
                    </View>
                </View>

                <View style={styles.tasksInfo}>
                    <Text style={styles.completed}>Concluídas</Text>
                    <View style={styles.value}>
                        <Text style={{ color: '#D9D9D9' }}>{tasksCompleted.length}</Text>
                    </View>
                </View>
            </View>

            <FlatList
                data={tasks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Task
                        key={item.id}
                        id={item.id}
                        content={item.content}
                        isComplete={item.isComplete}
                        onDeleteTask={() => handleTaskRemove(item.id)}
                        onTaskComplete={() => taskComplete(item.id)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.tasksEmpty}>
                        <Image source={require('../../../assets/Clipboard.png')} />
                        <View>
                            <Text style={{ color: '#808080', fontWeight: '700' }}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={{ color: '#808080' }}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}