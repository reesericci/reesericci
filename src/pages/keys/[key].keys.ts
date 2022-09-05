import * as json from "./index.json";
import type { APIContext } from 'astro';

export async function getStaticPaths() {
    const keys = JSON.parse((await json.get()).body);
    const arr = []
    Object.keys(keys).forEach((el) => {
        arr.push({params: {key: keys[el].title}, props: {...keys[el]}})
    })
    return arr
}

export async function get({ params }: APIContext) {
    const keys = JSON.parse((await json.get()).body);
    
    return {
        body: keys[params.key].key
    }

}