import axios from "axios";
import {
    signUpRoute,
    signInRoute,
    editUserDetailsRoute,
    addSkillRoute,
    addProjectRoute,
    allUserSkillsRoute,
} from "./ApiRoutes";

export const signUp = async (email, password) => {
    try {
        const response = await axios.post(
            signUpRoute,
            { email, password },
            {
                headers: {
                    "Content-type": "application/json",
                },
            }
        );

        return {
            status: response.status,
            data: response.data,
        };
    } catch (error) {
        return {
            status: error.response.status,
            msg: error.response.statusText,
        };
    }
};

export const signIn = async (email, password) => {
    try {
        const response = await axios.post(
            signInRoute,
            { email, password },
            {
                headers: {
                    "Content-type": "application/json",
                },
            }
        );

        return {
            status: response.status,
            data: response.data,
        };
    } catch (error) {
        return {
            status: error.response.status,
            msg: error.response.statusText,
        };
    }
};

export const editUserDetails = async (
    token,
    userId,
    name,
    city,
    country,
    contact,
    about
) => {
    try {
        const response = await axios.put(
            editUserDetailsRoute,
            {
                userId,
                name,
                city,
                country,
                contact,
                about,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return {
            status: response.status,
            data: response.data,
        };
    } catch (error) {
        return {
            status: error.response.status,
            msg: error.response.statusText,
        };
    }
};

export const addSkills = async (token, userId, skill, rating) => {
    try {
        const response = await axios.post(
            addSkillRoute,
            {
                userId,
                skill,
                rating,
            },
            {
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return {
            status: response.status,
            data: response.data,
        };
    } catch (error) {
        return {
            status: error.response.status,
            msg: error.response.statusText,
        };
    }
};

export const allUserSkills = async (token, userId) => {
    try {
        const response = await axios.get(`${allUserSkillsRoute}/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response);
        return {
            status: response.status,
            data: response.data,
        };
    } catch (error) {
        return {
            status: error.response.status,
            msg: error.response.statusText,
        };
    }
};

export const addProject = async (
    token,
    projectName,
    projectDescription,
    skillsUsed
) => {
    try {
        const response = await axios.post(
            addProjectRoute,
            {
                projectName,
                projectDescription,
                projectSkills: JSON.stringify(skillsUsed.map((s) => s._id)),
            },
            {
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return {
            status: response.status,
            data: response.data,
        };
    } catch (error) {
        return {
            status: error.response.status,
            msg: error.response.statusText,
        };
    }
};

export const allSkills = async (token) => {
    try {
        const response = await axios.get(allUserSkillsRoute, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return {
            status: response.status,
            data: response.data,
        };
    } catch (error) {
        return {
            status: error.response.status,
            msg: error.response.statusText,
        };
    }
};
