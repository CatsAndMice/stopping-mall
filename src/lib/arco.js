import {
    Layout, LayoutHeader, LayoutContent, Divider, Button,
    Carousel, CarouselItem, LayoutFooter, Space, PageHeader,
    FormItem,
    Form,Input,
    Checkbox
} from "@arco-design/web-vue"
import '@arco-design/web-vue/dist/arco.css';
import { IconUser } from '@arco-design/web-vue/es/icon';
export default {
    install(Vue) {
        console.log(Vue);
        Vue.use(Layout)
            .use(LayoutHeader)
            .use(LayoutContent)
            .use(LayoutFooter)
            .use(Space)
            .use(PageHeader)
            .use(Divider)
            .use(Button)
            .use(CarouselItem)
            .use(Carousel)
            .use(Form)
            .use(FormItem)
            .use(Input)
            .use(Checkbox)
            .use(IconUser)
    }
}

