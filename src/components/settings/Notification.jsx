import { useState } from "react"
import SettingsPageContainer from "./SettingsPageContainer";
import ToggleSwtich from "./ToggleSwtich";
import { Bell } from "lucide-react";

const Notification = () => {
    const[notifications, setNotifications] = useState({
        push: true,
        email:false, sms: true
    });
  return (
    <SettingsPageContainer icon={Bell} title={"Notifications Area"}>
        <ToggleSwtich label={"Push Notifications"}
        isOn={notifications.push}
        OnToggle={() => setNotifications({
            ...notifications, push: !notifications.push
        })}/>
        <ToggleSwtich label={"Email Notifications"}
        isOn={notifications.email}
        OnToggle={() => setNotifications({
            ...notifications, email: !notifications.email
        })}/>
        <ToggleSwtich label={"Message Notifications"}
        isOn={notifications.sms}
        OnToggle={() => setNotifications({
            ...notifications, sms: !notifications.sms
        })}/>
    </SettingsPageContainer>
  )
}

export default Notification