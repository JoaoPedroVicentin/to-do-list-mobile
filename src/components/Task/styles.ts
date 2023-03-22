import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#262626',
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 8,
        paddingRight: 8,
        gap: 8,
    },
    checkboxContainer: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkboxComplete: {
        backgroundColor: '#5E60CE',
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#5E60CE',
        borderRadius: 99999,
        color: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkboxNoComplete: {
        backgroundColor: 'transparent',
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#4EA8DE',
        borderRadius: 99999,
        color: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'center'
    },
    descriptionComplete: {
        flex: 1,
        color: '#808080',
        textDecorationLine: 'line-through'
    },
    descriptionNoComplete: {
        flex: 1,
        color: '#F2F2F2',
    },
    bin: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center'
    }
})