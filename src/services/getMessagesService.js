import ServiceClient from './ServiceClient';

export default function getMessages() {
    return ServiceClient('GET',
        'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?since=1521096352339&limit=10&token=9RxVxgFwBcKf');
}