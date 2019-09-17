import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TodoListContainer from './views/todo-list';
import LoginContainer from './views/login';
import MapContainer from './views/map';

(TodoListContainer as any).navigationOptions = { title: 'Todo List' };

const stackNavigator = createStackNavigator(
  {
    Map: MapContainer,
    Login: LoginContainer,
    TodoList: TodoListContainer
  },
  { initialRouteName: 'Map', headerMode: 'float' }
);

export default createAppContainer(stackNavigator);
