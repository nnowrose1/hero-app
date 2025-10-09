const getAppFromLS = () => {
    const storedApps = localStorage.getItem('app');
    if(storedApps){
        const apps= JSON.parse(storedApps);
        return apps;
    }
    else{
        return [];
    }
}

const addAppstoLS = (id) => {
    const app = getAppFromLS();
    const newApp = [...app, id];
    saveApptoLS(newApp);
}

const saveApptoLS = (newApp) => {
const appStringified = JSON.stringify(newApp);
localStorage.setItem('app', appStringified);
}

const removeAppfromLS = (id) => {
const storedAppIds = getAppFromLS();
const remainingAppIds = storedAppIds.filter(storedId => id!==storedId);
saveApptoLS(remainingAppIds);
}

export {getAppFromLS, addAppstoLS, removeAppfromLS}