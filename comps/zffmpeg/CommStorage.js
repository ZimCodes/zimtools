/*The Command Storage (CommStorage)*/
/*This is where the user's text inputs is stored for each category
Example below:
*/
export const globalEntry = {
    canvas:'',
    vsync:''
};
export const iMainEntry = {
    A:{
        formats:[],
        codecs:[],
    },
    B:{
        formats:[],
        codecs:[],
    },
    C:{
        formats:[],
        codecs:[],
    }

};
export const oMainEntry = {
    A: {
        formats:[],
        codecs:[],
        sizes:[],
        frames:[],
        metadata:[],
        disposition:[],
        duration:[],
        seek:[],
        target:[],
    },
    B: {
        formats:[],
        codecs:[],
        sizes:[],
        frames:[],
        metadata:[],
        disposition:[],
        duration:[],
        seek:[],
        target:[],
    },
    C: {
        formats:[],
        codecs:[],
        sizes:[],
        frames:[],
        metadata:[],
        disposition:[],
        duration:[],
        seek:[],
        target:[],
    },
};

export const oVideoEntry = {
    A:{
        rate:[],
        aspect:[],
        frame_size:[],
    },
    B:{
        rate:[],
        aspect:[],
        frame_size:[],
    },
    C:{
        rate:[],
        aspect:[],
        frame_size:[],
    }
};
export const oAdvancedEntry = {
    A:{
        map:[],
        filter:[],
    },
    B:{
        map:[],
        filter:[],
    },
    C:{
        map:[],
        filter:[],
    }

}