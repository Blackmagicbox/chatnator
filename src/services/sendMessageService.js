import ServiceClient from "./ServiceClient";

export default function sendMessage(body) {
    return ServiceClient(
        'POST',
        'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0',
        body);
}