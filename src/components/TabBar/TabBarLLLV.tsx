import { View, TouchableOpacity } from 'react-native'
import { styles } from './StyleTabBarLLLV';
import { NavigationHelpers, ParamListBase, TabNavigationState } from '@react-navigation/native';
import { BottomTabDescriptorMap, BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import Icon from 'react-native-vector-icons/MaterialIcons'

interface TabBarLLLVProps {
    state: TabNavigationState<ParamListBase>;
    descriptors: BottomTabDescriptorMap;
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

export function TabBarLLLV({ state, descriptors, navigation }: TabBarLLLVProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const name = options.tabBarIcon?.toString()

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return(
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttonTab}
            >
                <View style={{ alignItems: 'center', padding: 4 }}>
                    <View style={{ padding: 8, backgroundColor: isFocused ? "#f8e2fd" : "transparent", borderRadius: 99 }}>
                      {name ? 
                        <Icon 
                            name={name}
                            size={34}
                            color={ isFocused ? '#8f2abd' : '#535353'}
                        /> : null
                      }  
                    </View>
                </View>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}
