import {Comments} from './comment';

export class Post {
    id;
    title;
    author;
    publish_date;
    publish_day;
    publish_month;
    slug;
    description;
    content;
    activity: Comments[] = [];
}
