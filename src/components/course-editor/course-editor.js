import React, {useState, useEffect} from 'react';
import "./course-editor.style.client.css";
import {Link, useParams} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import ModuleList from "./module-list";
import LessonTab from "./lesson-tabs";
import TopicPill from "./topic-pills";
import CourseService from "../../services/course-service";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import widgetReducer from "../../reducers/widget-reducer";
import {Provider} from "react-redux";
import WidgetList from '../widgets/widget-list';

const reducers = combineReducers({
    moduleReducer,
    lessonReducer,
    topicReducer,
    widgetReducer
});

const store = createStore(reducers);

const CourseEditor = (props) => {
    const [courseService, setCourseSevice] = useState(new CourseService());
    const [course, setCourse] = useState({});
    const {courseId, moduleId, lessonId} = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        courseService.findCourseById(props.match.params.courseId)
            .then(data => { 
                setCourse(data);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
    <Provider store={store}>
    <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top flex-fill">
            <span className="navbar-brand">
                    <Link to={`/courses/${props.match.params.layout}`}>
                    <button className="btn-dark btn">
                        <i className="fas fa-times"></i>
                    </button>
                    </Link>
                {course.title}
            </span>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbar-nav-dropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbar-nav-dropdown">
                <ul className="nav navbar-nav nav-fill w-100">
                   
                    <a className="nav-item nav-link" role="button">
                        <i className="fas fa-plus"></i>
                    </a>
            </ul>
            </div>
        </nav>
        
        <div className="row wbdv-course-dashboard">
            <div className="col-3 mx-2">
                <div className="list-group wbdv-course-module" role="tablist">
                    <ModuleList />
                </div>
            </div>

            <div className="col-8 mx-2">
                <div className="row d-inline wbdv-course-lessons">
                    <LessonTab />
                </div>
                <div className="row d-inline wbdv-course-topics">
                    <TopicPill />
                </div>
                <div className="row d-inline wbdv-widget-list">
                    <WidgetList />
                </div>
                
            </div>
        </div>
    </div>
    </Provider>)
}




export default CourseEditor