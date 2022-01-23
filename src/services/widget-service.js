const URL = "https://wbdv-generic-server.herokuapp.com/api/semaa/widgets";

const WidgetService = {

    createWidget : (tid, widget) => {
        return fetch(`${URL}/topics/${tid}/widgets`, {
            method : "POST",
            body: JSON.stringify({type: "HEADING", size: 1, text: "New Widget"}),
            headers : {
                "content-type" : "application/json"
            },
            
        })
        .then(res => res.json());
    },


    findWidgetsForTopic : (tid) => {
        return fetch(`${URL}/topics/${tid}/widgets`, {
            method : "GET"
        })
        .then(res => res.json());
    },

    updateWidget : (wid, widget) => {
        return fetch(`${URL}/widgets/${wid}`, {
            method : "PUT",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(widget)
        })
        .then(res => res.json());
    },


    deleteWidget : (wid) => {
        return fetch(`${URL}/widgets/${wid}`, {
            method : "DELETE"
        })
        .then(res => res.json());
    },

    findAllWidgets : () => {
        return fetch(`${URL}/widgets`, {
            method : "GET"
        })
        .then(res => res.json());
    },


    findWidgetById : (wid) => {
        return fetch(`${URL}/widgets/%{wid}`, {
            method : "GET"
        })
        .then(res => res.json());
    }
};

export default WidgetService;