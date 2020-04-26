(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(6),o=(n(0),n(213)),i={title:"Usage"},l={id:"typeorm/usage",title:"Usage",description:"All examples assume the following [entity](https://typeorm.io/#/entities).",source:"@site/docs/typeorm/usage.md",permalink:"/nestjs-query/docs/typeorm/usage",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/typeorm/usage.md",sidebar:"docs",previous:{title:"Getting Started",permalink:"/nestjs-query/docs/typeorm/getting-started"},next:{title:"Multiple Databases",permalink:"/nestjs-query/docs/typeorm/advanced/multiple-databases"}},c=[{value:"Creating a Service",id:"creating-a-service",children:[{value:"Module",id:"module",children:[]},{value:"Querying",id:"querying",children:[]},{value:"Filtering",id:"filtering",children:[]},{value:"Sorting",id:"sorting",children:[]},{value:"Paging",id:"paging",children:[]},{value:"Find By Id",id:"find-by-id",children:[]},{value:"Get By Id",id:"get-by-id",children:[]}]},{value:"Creating",id:"creating",children:[{value:"Create One",id:"create-one",children:[]},{value:"Create Many",id:"create-many",children:[]}]},{value:"Updating",id:"updating",children:[{value:"Update One",id:"update-one",children:[]},{value:"Update Many",id:"update-many",children:[]}]},{value:"Deleting",id:"deleting",children:[{value:"Delete One",id:"delete-one",children:[]},{value:"Delete Many",id:"delete-many",children:[]}]},{value:"Foreign Keys",id:"foreign-keys",children:[{value:"Example",id:"example-12",children:[]}]},{value:"Relations",id:"relations",children:[{value:"Example",id:"example-13",children:[]}]},{value:"Custom Service",id:"custom-service",children:[]}],d={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All examples assume the following ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://typeorm.io/#/entities"}),"entity"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';\n\n@Entity()\nexport class TodoItemEntity {\n  @PrimaryGeneratedColumn()\n  id!: string;\n\n  @Column()\n  title!: string;\n\n  @Column()\n  completed!: boolean;\n\n  @CreateDateColumn()\n  created!: Date;\n\n  @UpdateDateColumn()\n  updated!: Date;\n}\n\n")),Object(o.b)("h2",{id:"creating-a-service"},"Creating a Service"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-typeorm")," package includes a ",Object(o.b)("inlineCode",{parentName:"p"},"@InjectTypeOrmQueryService")," decorator that creates your ",Object(o.b)("inlineCode",{parentName:"p"},"TypeOrmQueryService")," automatically."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE")," In this example the DTO and entity are the same shape, if you have a case where they are different or have computed fields check out ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../concepts/assemblers"}),"Assemblers")," to understand how to convert to and from the DTO/Entity."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { QueryService } from '@nestjs-query/core';\nimport { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { InjectTypeOrmQueryService } from '@nestjs-query/query-typeorm';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(\n    @InjectTypeOrmQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>\n  ) {\n    super(service);\n  }\n}\n")),Object(o.b)("h3",{id:"module"},"Module"),Object(o.b)("p",null,"In order to use the ",Object(o.b)("inlineCode",{parentName:"p"},"@InjectTypeOrmQueryService")," you will need to use the ",Object(o.b)("inlineCode",{parentName:"p"},"NestjsQueryTypeOrmModule"),"."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"NestjsQueryTypeOrmModule")," wraps the ",Object(o.b)("inlineCode",{parentName:"p"},"@nestjs-query/typeorm")," module and adds the additional decorators."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemResolver } from './todo-item.resolver';\n\n@Module({\n  providers: [TodoItemResolver],\n  imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n})\nexport class TodoItemModule {}\n\n")),Object(o.b)("h3",{id:"querying"},"Querying"),Object(o.b)("p",null,"To query for records from your service you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"query")," method which will return a ",Object(o.b)("inlineCode",{parentName:"p"},"Promise")," of an array of entities. To read more about querying take a look at the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../concepts/queries"}),"Queries Doc"),"."),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("p",null,"Get all records"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const records = await this.service.query({});\n")),Object(o.b)("h3",{id:"filtering"},"Filtering"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"filter")," option is translated to a ",Object(o.b)("inlineCode",{parentName:"p"},"WHERE")," clause in ",Object(o.b)("inlineCode",{parentName:"p"},"typeorm"),"."),Object(o.b)("h4",{id:"example-1"},"Example"),Object(o.b)("p",null,"To find all completed ",Object(o.b)("inlineCode",{parentName:"p"},"TodoItems")," by use can use the ",Object(o.b)("inlineCode",{parentName:"p"},"is")," operator."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const records = await this.service.query({\n   filter : {\n     completed: { is: true },\n   },\n});\n")),Object(o.b)("h3",{id:"sorting"},"Sorting"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"sorting")," option is translated to a ",Object(o.b)("inlineCode",{parentName:"p"},"ORDER BY"),"."),Object(o.b)("h4",{id:"example-2"},"Example"),Object(o.b)("p",null,"Sorting records by ",Object(o.b)("inlineCode",{parentName:"p"},"completed")," and ",Object(o.b)("inlineCode",{parentName:"p"},"title"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const records = await this.service.query({\n  sorting: [\n    {field: 'completed', direction: SortDirection.ASC},\n    {field: 'title', direction: SortDirection.DESC},\n  ],\n});\n")),Object(o.b)("h3",{id:"paging"},"Paging"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"paging")," option is translated to ",Object(o.b)("inlineCode",{parentName:"p"},"LIMIT")," and ",Object(o.b)("inlineCode",{parentName:"p"},"OFFSET"),"."),Object(o.b)("h4",{id:"example-3"},"Example"),Object(o.b)("p",null,"Skip the first 20 records and return the next 10."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const records = await this.service.query({\n  paging: {limit: 10, offset: 20},\n});\n")),Object(o.b)("h3",{id:"find-by-id"},"Find By Id"),Object(o.b)("p",null,"To find a single record you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"findById")," method."),Object(o.b)("h4",{id:"example-4"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const records = await this.service.findById(1);\n")),Object(o.b)("h3",{id:"get-by-id"},"Get By Id"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"getById")," method is the same as the ",Object(o.b)("inlineCode",{parentName:"p"},"findById")," with one key difference, it will throw an exception if the record is not found."),Object(o.b)("h4",{id:"example-5"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"try {\n  const records = await this.service.getById(1);\n} catch (e) {\n  console.error('Unable to get record with id = 1');\n}\n")),Object(o.b)("h2",{id:"creating"},"Creating"),Object(o.b)("h3",{id:"create-one"},"Create One"),Object(o.b)("p",null,"To create a single record use the ",Object(o.b)("inlineCode",{parentName:"p"},"createOne")," method."),Object(o.b)("h4",{id:"example-6"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const createdRecord = await this.service.createOne({\n  title: 'Foo',\n  completed: false,\n});\n")),Object(o.b)("h3",{id:"create-many"},"Create Many"),Object(o.b)("p",null,"To create multiple records use the ",Object(o.b)("inlineCode",{parentName:"p"},"createMany")," method."),Object(o.b)("h4",{id:"example-7"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const createdRecords = await this.service.createMany([\n  { title: 'Foo', completed: false },\n  { title: 'Bar', completed: true },\n]);\n")),Object(o.b)("h2",{id:"updating"},"Updating"),Object(o.b)("h3",{id:"update-one"},"Update One"),Object(o.b)("p",null,"To update a single record use the ",Object(o.b)("inlineCode",{parentName:"p"},"updateOne")," method."),Object(o.b)("h4",{id:"example-8"},"Example"),Object(o.b)("p",null,"Updates the record with an id equal to 1 to completed."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const updatedRecord = await this.service.updateOne(1, { completed: true });\n")),Object(o.b)("h3",{id:"update-many"},"Update Many"),Object(o.b)("p",null,"To update multiple records use the ",Object(o.b)("inlineCode",{parentName:"p"},"updateMany")," method."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE")," This method returns a ",Object(o.b)("inlineCode",{parentName:"p"},"UpdateManyResponse")," which contains the updated record count."),Object(o.b)("h4",{id:"example-9"},"Example"),Object(o.b)("p",null,"Updates all ",Object(o.b)("inlineCode",{parentName:"p"},"TodoItemEntities")," to completed if their title ends in ",Object(o.b)("inlineCode",{parentName:"p"},"Bar")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const { updatedCount } = await this.service.updateMany(\n  {completed: true}, // update\n  {completed: {is: false}, title: {like: '%Bar'}} // filter\n);\n")),Object(o.b)("h2",{id:"deleting"},"Deleting"),Object(o.b)("h3",{id:"delete-one"},"Delete One"),Object(o.b)("p",null,"To delete a single record use the ",Object(o.b)("inlineCode",{parentName:"p"},"deleteOne")," method."),Object(o.b)("h4",{id:"example-10"},"Example"),Object(o.b)("p",null,"Delete the record with an id equal to 1."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const deletedRecord = await this.service.deleteOne(1);\n")),Object(o.b)("h3",{id:"delete-many"},"Delete Many"),Object(o.b)("p",null,"To delete multiple records use the ",Object(o.b)("inlineCode",{parentName:"p"},"deleteMany")," method."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE")," This method returns a ",Object(o.b)("inlineCode",{parentName:"p"},"DeleteManyResponse")," which contains the deleted record count."),Object(o.b)("h4",{id:"example-11"},"Example"),Object(o.b)("p",null,"Delete all ",Object(o.b)("inlineCode",{parentName:"p"},"TodoItemEntities")," older than ",Object(o.b)("inlineCode",{parentName:"p"},"Jan 1, 2019"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const { deletedCount } = await this.service.deleteMany(\n  { created: { lte: new Date('2019-1-1') } } // filter\n);\n")),Object(o.b)("h2",{id:"foreign-keys"},"Foreign Keys"),Object(o.b)("p",null,"It is a common use case to include a foreign key from your entity in your DTO."),Object(o.b)("p",null,"To do this you should add the foreign key to your entity as well as your DTO."),Object(o.b)("h3",{id:"example-12"},"Example"),Object(o.b)("p",null,"Assume TodoItems can have SubTasks we would set up our SubTaskEntity using the following"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import {\n  Entity,\n  PrimaryGeneratedColumn,\n  Column,\n  CreateDateColumn,\n  UpdateDateColumn,\n  ObjectType,\n  ManyToOne,\n  JoinColumn,\n} from 'typeorm';\nimport { TodoItemEntity } from '../todo-item/todo-item.entity';\n\n@Entity({ name: 'sub_task' })\nexport class SubTaskEntity {\n  @PrimaryGeneratedColumn()\n  id!: number;\n\n  @Column()\n  title!: string;\n\n  @Column({ nullable: true })\n  description?: string;\n\n  @Column()\n  completed!: boolean;\n\n  // add the todoItemId to the model \n  @Column({ nullable: false, name: 'todo_item_id' })\n  todoItemId!: string;\n\n  @ManyToOne((): ObjectType<TodoItemEntity> => TodoItemEntity, (td) => td.subTasks, {\n    onDelete: 'CASCADE',\n    nullable: false,\n  })\n  // specify the join column we want to use.\n  @JoinColumn({ name: 'todo_item_id' })\n  todoItem!: TodoItemEntity;\n\n  @CreateDateColumn()\n  created!: Date;\n\n  @UpdateDateColumn()\n  updated!: Date;\n}\n")),Object(o.b)("p",null,"Then we could add the ",Object(o.b)("inlineCode",{parentName:"p"},"todoItemId")," to the SubTaskDTO."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { FilterableField } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\n\n@ObjectType('SubTask')\nexport class SubTaskDTO {\n  @FilterableField(() => ID)\n  id!: number;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n\n  // expose the todoItemId as a filterable field.\n  @FilterableField()\n  todoItemId!: string;\n}\n")),Object(o.b)("h2",{id:"relations"},"Relations"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This section only applies when you combine your DTO and entity"))),Object(o.b)("p",null,"When your DTO and entity are the same class and you have relations defined in ",Object(o.b)("inlineCode",{parentName:"p"},"typeorm")," you should not decorate your relations with ",Object(o.b)("inlineCode",{parentName:"p"},"@Field")," or ",Object(o.b)("inlineCode",{parentName:"p"},"@FilterableField"),". "),Object(o.b)("p",null,"Instead specify the relations you want to expose in your resolver."),Object(o.b)("h3",{id:"example-13"},"Example"),Object(o.b)("p",null,"Assume you have the following subtask definition."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import {\n  Entity,\n  PrimaryGeneratedColumn,\n  Column,\n  CreateDateColumn,\n  UpdateDateColumn,\n  ManyToOne,\n  JoinColumn,\n} from 'typeorm';\nimport { ObjectType, ID } from '@nestjs/graphql';\nimport { FilterableField } from '@nestjs-query/query-graphql';\nimport { TodoItemEntity } from '../todo-item/todo-item.entity';\n\n@ObjectType('SubTask')\n@Entity({ name: 'sub_task' })\nexport class SubTaskEntity {\n  @FilterableField(() => ID)\n  @PrimaryGeneratedColumn()\n  id!: number;\n\n  @FilterableField()\n  @Column()\n  title!: string;\n\n  @FilterableField()\n  @Column({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  @Column()\n  completed!: boolean;\n\n  @FilterableField()\n  @Column({ nullable: false, name: 'todo_item_id' })\n  todoItemId!: string;\n\n  @ManyToOne(() => TodoItemEntity, (td) => td.subTasks, {\n    onDelete: 'CASCADE',\n    nullable: false,\n  })\n  @JoinColumn({ name: 'todo_item_id' })\n  todoItem!: TodoItemEntity;\n\n  @FilterableField()\n  @CreateDateColumn()\n  created!: Date;\n\n  @FilterableField()\n  @UpdateDateColumn()\n  updated!: Date;\n}\n")),Object(o.b)("p",null,"Notice how the ",Object(o.b)("inlineCode",{parentName:"p"},"todoItem")," is not decorated with a field decorator. "),Object(o.b)("p",null,"Instead, add it to your resolver."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { QueryService } from '@nestjs-query/core';\nimport { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { InjectTypeOrmQueryService } from '@nestjs-query/query-typeorm';\nimport { TodoItemEntity } from '../todo-item/todo-item.entity';\nimport { SubTaskEntity } from './sub-task.entity';\n\n@Resolver(() => SubTaskEntity)\nexport class SubTaskResolver extends CRUDResolver(SubTaskEntity, {\n  relations: {\n    one: { todoItem: { DTO: TodoItemEntity, disableRemove: true } },\n  },\n}) {\n  constructor(@InjectTypeOrmQueryService(SubTaskEntity) readonly service: QueryService<SubTaskEntity>) {\n    super(service);\n  }\n}\n\n")),Object(o.b)("h2",{id:"custom-service"},"Custom Service"),Object(o.b)("p",null,"If you want to add custom methods to your service you can extend the ",Object(o.b)("inlineCode",{parentName:"p"},"TypeOrmQueryService")," directly."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { Injectable } from '@nestjs/common';\nimport { TypeOrmQueryService } from '@nestjs-query/query-typeorm';\nimport { InjectRepository } from '@nestjs/typeorm';\nimport { Repository } from 'typeorm';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@QueryService(TodoItemEntity)\nexport class TodoItemService extends TypeOrmQueryService<TodoItemEntity> {\n  constructor(\n    @InjectRepository(TodoItemEntity) repo: Repository<TodoItemEntity>,\n  ) {\n    super(repo);\n  }\n\n  async markAllAsCompleted(): Promise<number> {\n     const entities = await this.query({ filter: { completed: { is: true } } });\n\n     const { updatedCount } = await this.updateMany(\n       { completed: true }, // update\n       { id: { in: entities.map(e => e.id) } } // filter\n     );\n     // do some other business logic\n     return updatedCount;\n  }\n}\n\n")))}p.isMDXComponent=!0},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,u=s["".concat(i,".").concat(m)]||s[m]||b[m]||o;return n?r.a.createElement(u,l({ref:t},d,{components:n})):r.a.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);