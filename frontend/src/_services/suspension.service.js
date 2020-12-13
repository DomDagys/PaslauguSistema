import config from 'config';
import { fetchWrapper, history } from '@/_helpers';

const baseUrl = `${config.apiUrl}/suspend`;

export const suspensionService = {
    suspendPost,
    getSuspendedPosts,
    removeSuspention,
    removePost,
    suspendUser,
    getSuspendedUsers,
    removeUserSuspension
};

function suspendPost(postId, adminName){
    return fetchWrapper.post(`${baseUrl}/post`, {postId: postId, adminName: adminName})
}

function getSuspendedPosts() {
    return fetchWrapper.get(`${baseUrl}/post`);
}

function removeSuspention(id) {
    return fetchWrapper.put(`${baseUrl}/post`, {id: id});
}

function removePost(id) {
    return fetchWrapper.delete(`${baseUrl}/post${id}`);
}

function suspendUser(accountId, adminName) {
    return fetchWrapper.post(`${baseUrl}/user`, {accountId: accountId, adminName: adminName});
}

function getSuspendedUsers() {
    return fetchWrapper.get(`${baseUrl}/user`);
}

function removeUserSuspension(suspensionId, accountId) {
    return fetchWrapper.put(`${baseUrl}/user`, {suspensionId: suspensionId, accountId: accountId});
}