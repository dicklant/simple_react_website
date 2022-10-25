import React from "react";
import * as microsoftTeams from "@microsoft/teams-js";

interface IProps {

}

class TabConfig extends React.Component {

    tabName : string;
    
    constructor (props : IProps) {
        super(props);

        this.tabName = "Yellow tab";
    }


    render() {

        const onChangeTabname = (event: React.ChangeEvent<HTMLInputElement>) => {
            this.tabName = event.target.value;
        }

 /*
        microsoftTeams.app.initialize();

        microsoftTeams.pages.config.registerOnSaveHandler((saveEvent) => {
            // eslint-disable-next-line no-template-curly-in-string
            const baseUrl = "https://simple-react-teams.azurewebsites.net/"; 
            //const routeBase = "/tab";

            microsoftTeams.pages.config.setConfig({
                suggestedDisplayName : this.tabName,
                entityId : "Test",
                contentUrl : baseUrl,
                websiteUrl : baseUrl,
            });

            saveEvent.notifySuccess();
        });
*/
        return <div>
            <h1>Hello config</h1>
            <p>Nom de l'onglet</p>
            <input placeholder={this.tabName} onChange={onChangeTabname}></input>
        </div>
    }

}

export default TabConfig;
