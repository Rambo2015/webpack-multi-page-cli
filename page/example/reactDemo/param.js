module.exports = {
    title: 'react-demo',
    tag: {
        meta: [{
            name: 'webpack-multi-page-cli',
            content: 'tsVueDemo'
        }, {
            name: "webpack-multi-page-cli",
            content: 'https://github.com/pomelott/webpack4.x_Demo'
        }],
        headLink: [{
            rel: "icon",
            type: "image/png",
            href: 'https://react.docschina.org/icons/icon-48x48.png?v=a95b1cba85b449d3cf230505f32a3d42'
        },{
            href: 'https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.0/animate.min.css',
            rel: "stylesheet"
        }]
    },
    reactInit: {
        el: '#root'
    }
}