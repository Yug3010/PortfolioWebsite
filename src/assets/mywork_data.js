import project1_img from '../assets/project_1.svg'
import project2_img from '../assets/project_2.svg'
// import project3_img from '../assets/project_3.svg' // No image for To-Do App

const mywork_data = [
    {
        w_no: 1,
        w_name: "Ecommerce Website",
        w_img: project1_img,
        w_description: `
            <div>
                <strong>Technologies:</strong> React, React Redux Toolkit, Vite.js, Postman
                <br/><br/>
                <strong>Features:</strong>
                <ul>
                    <li>Fully-functional eCommerce platform with optimized performance and user experience</li>
                    <li>API testing and management using Postman for robust backend connectivity and seamless data exchange</li>
                    <li>Advanced state management with Redux for an interactive shopping environment</li>
                </ul>
            </div>
        `
    },
    {
        w_no: 2,
        w_name: "Artzy Website",
        w_img: project2_img,
        w_description: `
            <div>
                <strong>Technologies:</strong> Html, Css, JavaScript, Bootstrap, Node.js, ExpressJS, MongoDB, GitHub, Cyclic
                <br/><br/>
                <strong>Features:</strong>
                <ul>
                    <li>Dynamic website showcasing various art pieces with a responsive frontend</li>
                    <li>Robust backend server handling requests and performing CRUD operations with MongoDB</li>
                    <li>Source control with GitHub and deployment on Cyclic</li>
                </ul>
            </div>
        `
    },
    {
        w_no: 3,
        w_name: "To-Do App",
        w_description: `
            <div>
                <strong>Technologies:</strong> React, TypeScript, 'react-beautiful-dnd'
                <br/><br/>
                <strong>Features:</strong>
                <ul>
                    <li>Task management app with active and completed states</li>
                    <li>Drag-and-drop functionality for task management</li>
                    <li>Seamless and intuitive user interface</li>
                </ul>
            </div>
        `
    },
]

export default mywork_data;
