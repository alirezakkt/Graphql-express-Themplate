const graphql = require ("graphql");    
const lod= require ("lodash");    

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,  

} = graphql;

const Lesson = [
    { id:"1", name:"GraphQL" , group:"Front"},
    { id:"2", name:"React" , group:"Front"},
    { id:"3", name:"Express" , group:"Back"},
]

const LessonType = new GraphQLObjectType({
    name : 'Lesson',
    fields : () => ({
        id: {type : GraphQLString},
        name : {type : GraphQLString},
        group : {type : GraphQLString},
    })
})

const RootQuery = GraphQLObjectType ({
    name : 'RootQueryType',
    fields : {
        lesson : {
            type : LessonType,
            args :{id: {type : GraphQLString}},
            resolve(parent,args){
                return lod.find(Lesson,{id:args.id})
            }
        }
    }
});

module.export = new GraphQLSchema({
    query : RootQuer
})
