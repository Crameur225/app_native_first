import {Tabs} from "expo-router";


export default function TabsLayout() {
  return(
    <Tabs>
        <Tabs.Screen name="index" options={{title:"Accueil"}} />
        <Tabs.Screen name="settings" options={{title: "Settings"}}/>
    </Tabs>
  );
}   