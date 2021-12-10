import {mount}  from "@vue/test-utils";




// it('content', () => {
//     const Comp = {
//         template: `<div><Hello /></div>`
//     }
//     const wrapper = mount(Comp, {
//         global: {
//             components: {
//                 HelloWorld
//             }
//         }
//     })
//     // 最简单的测试用例查看是否包含Hello Jest文字。
//     expect(wrapper.findComponent({ name: 'HelloWorld' }).text()).toContain('Hello Jest')
// })

import HelloWorld from "../components/HelloWorld";
import { shallowMount } from "@vue/test-utils";

describe("aaa", () => {
    test("should ", () => {
        const wrapper = shallowMount(HelloWorld, {
            props: {
                msg: "hello,vue3",
            },
        });
        expect(wrapper.text()).toMatch("hello,vue3");
    });
});
