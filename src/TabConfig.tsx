import React from "react";
import { app, pages } from "@microsoft/teams-js";

interface IProps {

}

class TabConfig extends React.Component {

    tabName: string;

    constructor(props: IProps) {
        super(props);

        this.tabName = "Yellow tab";
    }


    render() {

        const onChangeTabname = (event: React.ChangeEvent<HTMLInputElement>) => {
            this.tabName = event.target.value;
        }

        // Initialize the Microsoft Teams SDK
        app.initialize().then(() => {
            /**
             * When the user clicks "Save", save the url for your configured tab.
             * This allows for the addition of query string parameters based on
             * the settings selected by the user.
             */
            pages.config.registerOnSaveHandler((saveEvent) => {
                const baseUrl = `https://simple-react-teams.azurewebsites.net`;

                pages.config.setConfig({
                    suggestedDisplayName: this.tabName,
                    entityId: "Test",
                    contentUrl: baseUrl,
                    websiteUrl: baseUrl,
                }).then(() => {
                    saveEvent.notifySuccess();
                });
            });

            /**
             * After verifying that the settings for your tab are correctly
             * filled in by the user you need to set the state of the dialog
             * to be valid.  This will enable the save button in the configuration
             * dialog.
             */
            pages.config.setValidityState(true);
        });






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
            <h1>Hello CONFIG</h1>
            <p>Nom de l'onglet</p>
            <input placeholder={this.tabName} onChange={onChangeTabname}></input>
        </div>
    }

}

export default TabConfig;
