# check-in

一个用于网站自动签到的程序。

## QuickStart

目前学习参考于 [binnux/qiandao](https://github.com/binux/qiandao) 这一项目，原有项目是又Python2开发的，但是因为python2面临不再支持的情况，所以开发了一版基于JavaScript开发的程序，同时兼容 [binnux/qiandao](https://github.com/binux/qiandao) 项目上原有插件，插件生成仍用HAR标准。

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org