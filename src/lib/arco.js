import {
    Layout,
    LayoutHeader,
    LayoutContent,
    Divider,
    Button,
    Carousel,
    CarouselItem,
    LayoutFooter,
    Space,
    PageHeader,
    FormItem,
    Form,
    Input,
    Checkbox,
    Grid,
    List,
    ListItem,
    InputPassword,
    Image,
    Pagination,
    InputNumber,
    Menu,
    SubMenu,
    MenuItem,
    Table,
    TableColumn
} from "@arco-design/web-vue"
import '@arco-design/web-vue/dist/arco.css';
import {IconUser, IconLock ,IconHome,IconEmail} from '@arco-design/web-vue/es/icon';
export default {
    install(Vue) {
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
            .use(IconLock)
            .use(Grid)
            .use(InputPassword)
            .use(List)
            .use(ListItem)
            .use(Image)
            .use(Pagination)
            .use(InputNumber)
            .use(Menu)
            .use(MenuItem)
            .use(SubMenu)
            .use(IconHome)
            .use(IconEmail)
            .use(Table)
            .use(TableColumn)
    }
}

