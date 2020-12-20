import config from 'config';
import { fetchWrapper, history } from '@/_helpers';

const baseUrl = `${config.apiUrl}/report`;

export const reportService = {
    getAllUserReports,
    getAllPostReports,
    clearReport,
    reportUser,
    reportPost
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

function reportUser(id, category) {

    return fetchWrapper.post(`${baseUrl}/user`, {category: category, accountId: id});
}

function reportPost(id, category) {
    return fetchWrapper.post(`${baseUrl}/post`, {category: category, postId: id});
}