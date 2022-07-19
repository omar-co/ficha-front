import {NavigationRequired as Navigation } from "../data/Navigation";


export default class NavigationService {

    static modules = [];

    static nextValue = '';
    static prevValue = '';

    static next(current: string) {
        let index = Navigation.findIndex((item: any) => {
            return item.value === current;
        });
        index++;

        if (this.isActive(index)){
            const value = '/' + Navigation[index].value;
            this.nextValue = value;
            return value;
        }
        this.next(Navigation[index].value);
    }


    static prev(current: string) {
        let index = Navigation.findIndex((item: any) => {
            return item.value === current;
        });
        index--;

        if (this.isActive(index)){
            const value = '/' + Navigation[index].value;
            this.prevValue = value;
            return value;
        }
        this.prev(Navigation[index].value);
    }

    static isActive(index: number) {
        const module = Navigation[index].value;

        return this.getActiveModules().find((item: any) => {
            return item.value === module;
        })
    }

    static getActiveModules() {
        if (!this.modules.length) {
            // @ts-ignore
            this.modules = JSON.parse(localStorage.getItem('nav')) ?? [];
        }
        return this.modules;
    }

}