import ServiceClient from './ServiceClient';

export default function getMessages() {
    return ServiceClient('GET',
        'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=9RxVxgFwBcKf');
}