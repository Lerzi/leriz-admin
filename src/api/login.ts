import request from '~/utils/request';
interface LoginForm {
  username: string;
  password: string;
}

export function login(data: LoginForm): any {
  return request({
    url: '',
    method: 'post',
    data,
  });
}
