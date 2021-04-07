export default {
  'POST api/user/register': (req, res) => {
    const { password, userName, type } = req.body;
    if (password === '123456' && userName === 'admin') {
      res.send({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      return;
    }
  },
  'GET api/user/login': {
    name: 'Serati Ma',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
  }
}