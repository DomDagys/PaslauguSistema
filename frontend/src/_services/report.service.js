import config from 'config';
import { fetchWrapper, history } from '@/_helpers';

const baseUrl = `${config.apiUrl}/report`;

export const reportService = {
    getAllUserReports,
    getAllPostReports,
    clearReport,
    getUserPosts
};

function getAllUserReports() {
    return fetchWrapper.get(`${baseUrl}/user`);
}

function getAllPostReports() {
    return fetchWrapper.get(`${baseUrl}/post`);
}

function clearReport(id, adminName) {
    return fetchWrapper.put(`${baseUrl}/clear`, {id: id, adminName: adminName});
}

function getUserPosts(username) {
    return fetchWrapper.get(`${baseUrl}/userPosts?username=${username}`);
}