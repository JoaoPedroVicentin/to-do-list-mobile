import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  
  container: {
    backgroundColor: '#1a1a1a',
    paddingLeft: 24,
    paddingRight: 24,
    flex: 1,
  },

  header: {
    marginLeft: -24,
    marginRight: -24,
    backgroundColor: '#0D0D0D',
    height: 173,
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    width: 110,
    height: 32
  },

  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#0d0d0d',
    borderRadius: 6,
    color: '#F2F2F2',
    padding: 16,
    fontSize: 16,
    marginRight: 4,
  },

  buttonText: {
    color: '#fff',
    fontSize: 24
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },

  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: -28,
    marginBottom: 42
  },

  tasksInfos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  tasksInfo: {
    flexDirection: 'row',
    gap: 8
  },

  created: {
    color: '#4EA8DE',
    fontWeight: '700'
  },

  completed: {
    color: '#8284FA',
    fontWeight: '700'
  },

  value: {
    backgroundColor: '#333333',
    width: 25,
    height: 19,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 99999
  },

  tasksEmpty: {
    borderTopWidth: 1,
    borderTopColor: '#333333',
    paddingTop: 48,
    paddingBottom: 48,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16
  },
})