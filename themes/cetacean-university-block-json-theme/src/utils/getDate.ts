import { format } from "date-fns";

import type { WP_Post } from "wordpress-types";

export function getDate(post: WP_Post, formatStr = "dd/MM/yyyy"){
    return format(post.date, formatStr);
}