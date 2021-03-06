import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  users: Array<User>;
  formation?: Maybe<Formation>;
  formations: Array<Formation>;
  teacherFormations: Array<Formation>;
  modules: Array<Module>;
  class?: Maybe<Class>;
  classes: Array<Class>;
  student?: Maybe<Student>;
  students: Array<Student>;
  publicStudents: Array<PublicStudent>;
  notes: Array<Note>;
  activity?: Maybe<Activity>;
  activities: Array<Activity>;
  _activitiesMeta: ActivitiesMeta;
};


export type QueryFormationArgs = {
  where: FormationWhereUniqueInput;
};


export type QueryClassArgs = {
  where: ClassWhereUniqueInput;
};


export type QueryStudentArgs = {
  where: StudentWhereUniqueInput;
};


export type QueryPublicStudentsArgs = {
  where: PublicStudentWhereClassInput;
};


export type QueryActivityArgs = {
  where: ActivityWhereInput;
};


export type QueryActivitiesArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ActivityOrderByInput>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  role: Role;
};

export enum Role {
  Admin = 'ADMIN',
  Teacher = 'TEACHER'
}

export type FormationWhereUniqueInput = {
  id: Scalars['String'];
};

export type Formation = {
  __typename?: 'Formation';
  id: Scalars['String'];
  name: Scalars['String'];
  descUrl: Scalars['String'];
  level: Level;
  modules: Array<Module>;
  classes: Array<Class>;
};

export enum Level {
  TechnicienSpecialise = 'Technicien_Specialise',
  Technicien = 'Technicien',
  Qualification = 'Qualification',
  Specialisation = 'Specialisation',
  BacProfessionnel = 'Bac_Professionnel',
  ParcoursCollegial = 'Parcours_Collegial',
  FormationQualifiante = 'Formation_Qualifiante'
}

export type Module = {
  __typename?: 'Module';
  id: Scalars['String'];
  number: Scalars['Int'];
  name: Scalars['String'];
  classes: Array<Class>;
  notes: Array<Note>;
  formation: Formation;
};

export type Class = {
  __typename?: 'Class';
  id: Scalars['String'];
  year: Year;
  group: Group;
  timetable?: Maybe<Scalars['String']>;
  students: Array<Student>;
  modules: Array<Module>;
  formation: Formation;
  teacher: User;
};

export enum Year {
  First = 'First',
  Second = 'Second'
}

export enum Group {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E'
}

export type Student = {
  __typename?: 'Student';
  id: Scalars['String'];
  fullName: Scalars['String'];
  cef?: Maybe<Scalars['String']>;
  cin?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  notes: Array<Note>;
  finalNote1?: Maybe<Scalars['Float']>;
  finalNote2?: Maybe<Scalars['Float']>;
  class: Class;
};

export type Note = {
  __typename?: 'Note';
  id: Scalars['String'];
  note1?: Maybe<Scalars['Float']>;
  note2?: Maybe<Scalars['Float']>;
  note3?: Maybe<Scalars['Float']>;
  efm?: Maybe<Scalars['Float']>;
  student: Student;
  module: Module;
};

export type ClassWhereUniqueInput = {
  id: Scalars['String'];
};

export type StudentWhereUniqueInput = {
  id: Scalars['String'];
};

export type PublicStudentWhereClassInput = {
  classId: Scalars['String'];
};

export type PublicStudent = {
  __typename?: 'PublicStudent';
  id: Scalars['String'];
  fullName: Scalars['String'];
  cef?: Maybe<Scalars['String']>;
  cin?: Maybe<Scalars['String']>;
};

export type ActivityWhereInput = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type Activity = {
  __typename?: 'Activity';
  id: Scalars['String'];
  image: Scalars['String'];
  title: Scalars['String'];
  desc: Scalars['String'];
  date: Scalars['String'];
  creator: Scalars['String'];
  slug: Scalars['String'];
};

export type ActivityOrderByInput = {
  title?: Maybe<Sort>;
  date?: Maybe<Sort>;
};

export enum Sort {
  Asc = 'asc',
  Desc = 'desc'
}

export type ActivitiesMeta = {
  __typename?: 'ActivitiesMeta';
  count: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register?: Maybe<User>;
  login?: Maybe<User>;
  logout: Scalars['Boolean'];
  deleteUser: User;
  createFormation: Formation;
  updateFormation: Formation;
  deleteFormation: Formation;
  createModule: Module;
  updateModule: Module;
  deleteModule: Module;
  createClass: Class;
  updateClass: Class;
  deleteClass: Class;
  createStudent: Student;
  updateStudent: Student;
  deleteStudent: Student;
  studentNotes?: Maybe<Student>;
  createNote: Note;
  updateNote: Note;
  deleteNote: Note;
  createActivity: Activity;
  updateActivity: Activity;
  deleteActivity: Activity;
};


export type MutationRegisterArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationCreateFormationArgs = {
  data: FormationCreateInput;
};


export type MutationUpdateFormationArgs = {
  where: FormationWhereUniqueInput;
  data: FormationUpdateInput;
};


export type MutationDeleteFormationArgs = {
  where: FormationWhereUniqueInput;
};


export type MutationCreateModuleArgs = {
  data: ModuleCreateInput;
};


export type MutationUpdateModuleArgs = {
  where: ModuleWhereUniqueInput;
  data: ModuleUpdateInput;
};


export type MutationDeleteModuleArgs = {
  where: ModuleWhereUniqueInput;
};


export type MutationCreateClassArgs = {
  data: ClassCreateInput;
};


export type MutationUpdateClassArgs = {
  where: ClassWhereUniqueInput;
  data: ClassUpdateInput;
  file?: Maybe<Scalars['String']>;
};


export type MutationDeleteClassArgs = {
  where: ClassWhereUniqueInput;
};


export type MutationCreateStudentArgs = {
  data: StudentCreateInput;
};


export type MutationUpdateStudentArgs = {
  where: StudentWhereUniqueInput;
  data: StudentUpdateInput;
};


export type MutationDeleteStudentArgs = {
  where: StudentWhereUniqueInput;
};


export type MutationStudentNotesArgs = {
  cinOrCef: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateNoteArgs = {
  data: NoteCreateInput;
};


export type MutationUpdateNoteArgs = {
  where: NoteWhereUniqueInput;
  data: NoteUpdateInput;
};


export type MutationDeleteNoteArgs = {
  where: NoteWhereUniqueInput;
};


export type MutationCreateActivityArgs = {
  data: ActivityCreateInput;
  file: Scalars['String'];
};


export type MutationUpdateActivityArgs = {
  where: ActivityWhereUniqueInput;
  data: ActivityUpdateInput;
  file?: Maybe<Scalars['String']>;
};


export type MutationDeleteActivityArgs = {
  where: ActivityWhereUniqueInput;
};

export type UserWhereUniqueInput = {
  id: Scalars['String'];
};

export type FormationCreateInput = {
  name: Scalars['String'];
  descUrl: Scalars['String'];
  level: Level;
};

export type FormationUpdateInput = {
  name?: Maybe<Scalars['String']>;
  descUrl?: Maybe<Scalars['String']>;
  level?: Maybe<Level>;
};

export type ModuleCreateInput = {
  number: Scalars['Int'];
  name: Scalars['String'];
  formation: FormationConnectModuleInput;
};

export type FormationConnectModuleInput = {
  connect: FormationWhereUniqueInput;
};

export type ModuleWhereUniqueInput = {
  id: Scalars['String'];
};

export type ModuleUpdateInput = {
  number?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  formation?: Maybe<FormationConnectModuleInput>;
};

export type ClassCreateInput = {
  year: Year;
  group: Group;
  formation: FormationConnectClassInput;
  teacher: UserConnectClassInput;
};

export type FormationConnectClassInput = {
  connect: FormationWhereUniqueInput;
};

export type UserConnectClassInput = {
  connect: UserWhereUniqueInput;
};

export type ClassUpdateInput = {
  year?: Maybe<Year>;
  group?: Maybe<Group>;
  timetable?: Maybe<Scalars['String']>;
  formation?: Maybe<FormationConnectClassInput>;
  teacher?: Maybe<UserConnectClassInput>;
};

export type StudentCreateInput = {
  fullName: Scalars['String'];
  cef?: Maybe<Scalars['String']>;
  cin?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  finalNote1?: Maybe<Scalars['Float']>;
  finalNote2?: Maybe<Scalars['Float']>;
  class: ClassConnectStudentInput;
};

export type ClassConnectStudentInput = {
  connect: ClassWhereUniqueInput;
};

export type StudentUpdateInput = {
  fullName?: Maybe<Scalars['String']>;
  cef?: Maybe<Scalars['String']>;
  cin?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  finalNote1?: Maybe<Scalars['Float']>;
  finalNote2?: Maybe<Scalars['Float']>;
  class?: Maybe<ClassConnectStudentInput>;
};

export type NoteCreateInput = {
  note1?: Maybe<Scalars['Float']>;
  note2?: Maybe<Scalars['Float']>;
  note3?: Maybe<Scalars['Float']>;
  efm?: Maybe<Scalars['Float']>;
  student: StudentConnectNoteInput;
  module: ModuleConnectNoteInput;
};

export type StudentConnectNoteInput = {
  connect: StudentWhereUniqueInput;
};

export type ModuleConnectNoteInput = {
  connect: ModuleWhereUniqueInput;
};

export type NoteWhereUniqueInput = {
  id: Scalars['String'];
};

export type NoteUpdateInput = {
  note1?: Maybe<Scalars['Float']>;
  note2?: Maybe<Scalars['Float']>;
  note3?: Maybe<Scalars['Float']>;
  efm?: Maybe<Scalars['Float']>;
  module?: Maybe<ModuleConnectNoteInput>;
};

export type ActivityCreateInput = {
  title: Scalars['String'];
  desc: Scalars['String'];
  date: Scalars['String'];
  creator: Scalars['String'];
};

export type ActivityWhereUniqueInput = {
  id: Scalars['String'];
};

export type ActivityUpdateInput = {
  image?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  creator?: Maybe<Scalars['String']>;
};

export type ActivityFragment = (
  { __typename?: 'Activity' }
  & Pick<Activity, 'id' | 'image' | 'title' | 'desc' | 'date' | 'creator' | 'slug'>
);

export type ClassFragment = (
  { __typename?: 'Class' }
  & Pick<Class, 'id' | 'year' | 'group' | 'timetable'>
);

export type FormationFragment = (
  { __typename?: 'Formation' }
  & Pick<Formation, 'id' | 'name' | 'descUrl' | 'level'>
);

export type ModuleFragment = (
  { __typename?: 'Module' }
  & Pick<Module, 'id' | 'number' | 'name'>
);

export type NoteFragment = (
  { __typename?: 'Note' }
  & Pick<Note, 'id' | 'note1' | 'note2' | 'note3' | 'efm'>
);

export type StudentFragment = (
  { __typename?: 'Student' }
  & Pick<Student, 'id' | 'fullName' | 'cef' | 'cin' | 'password' | 'finalNote1' | 'finalNote2'>
);

export type StudentNotesMutationVariables = Exact<{
  cinOrCef: Scalars['String'];
  password: Scalars['String'];
}>;


export type StudentNotesMutation = (
  { __typename?: 'Mutation' }
  & { studentNotes?: Maybe<(
    { __typename?: 'Student' }
    & { notes: Array<(
      { __typename?: 'Note' }
      & { module: (
        { __typename?: 'Module' }
        & ModuleFragment
      ) }
      & NoteFragment
    )> }
    & StudentFragment
  )> }
);

export type ActivitiesQueryVariables = Exact<{
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ActivityOrderByInput>;
}>;


export type ActivitiesQuery = (
  { __typename?: 'Query' }
  & { activities: Array<(
    { __typename?: 'Activity' }
    & ActivityFragment
  )>, _activitiesMeta: (
    { __typename?: 'ActivitiesMeta' }
    & Pick<ActivitiesMeta, 'count'>
  ) }
);

export type ActivityQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ActivityQuery = (
  { __typename?: 'Query' }
  & { activity?: Maybe<(
    { __typename?: 'Activity' }
    & ActivityFragment
  )> }
);

export type FormationsQueryVariables = Exact<{ [key: string]: never; }>;


export type FormationsQuery = (
  { __typename?: 'Query' }
  & { formations: Array<(
    { __typename?: 'Formation' }
    & FormationFragment
  )> }
);

export type FormationsWithClassesQueryVariables = Exact<{ [key: string]: never; }>;


export type FormationsWithClassesQuery = (
  { __typename?: 'Query' }
  & { formations: Array<(
    { __typename?: 'Formation' }
    & { classes: Array<(
      { __typename?: 'Class' }
      & ClassFragment
    )> }
    & FormationFragment
  )> }
);

export type PublicStudentsQueryVariables = Exact<{
  classId: Scalars['String'];
}>;


export type PublicStudentsQuery = (
  { __typename?: 'Query' }
  & { publicStudents: Array<(
    { __typename?: 'PublicStudent' }
    & Pick<PublicStudent, 'id' | 'fullName' | 'cef' | 'cin'>
  )> }
);

export const ActivityFragmentDoc = gql`
    fragment Activity on Activity {
  id
  image
  title
  desc
  date
  creator
  slug
}
    `;
export const ClassFragmentDoc = gql`
    fragment Class on Class {
  id
  year
  group
  timetable
}
    `;
export const FormationFragmentDoc = gql`
    fragment Formation on Formation {
  id
  name
  descUrl
  level
}
    `;
export const ModuleFragmentDoc = gql`
    fragment Module on Module {
  id
  number
  name
}
    `;
export const NoteFragmentDoc = gql`
    fragment Note on Note {
  id
  note1
  note2
  note3
  efm
}
    `;
export const StudentFragmentDoc = gql`
    fragment Student on Student {
  id
  fullName
  cef
  cin
  password
  finalNote1
  finalNote2
}
    `;
export const StudentNotesDocument = gql`
    mutation StudentNotes($cinOrCef: String!, $password: String!) {
  studentNotes(cinOrCef: $cinOrCef, password: $password) {
    ...Student
    notes {
      ...Note
      module {
        ...Module
      }
    }
  }
}
    ${StudentFragmentDoc}
${NoteFragmentDoc}
${ModuleFragmentDoc}`;
export type StudentNotesMutationFn = Apollo.MutationFunction<StudentNotesMutation, StudentNotesMutationVariables>;

/**
 * __useStudentNotesMutation__
 *
 * To run a mutation, you first call `useStudentNotesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudentNotesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studentNotesMutation, { data, loading, error }] = useStudentNotesMutation({
 *   variables: {
 *      cinOrCef: // value for 'cinOrCef'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useStudentNotesMutation(baseOptions?: Apollo.MutationHookOptions<StudentNotesMutation, StudentNotesMutationVariables>) {
        return Apollo.useMutation<StudentNotesMutation, StudentNotesMutationVariables>(StudentNotesDocument, baseOptions);
      }
export type StudentNotesMutationHookResult = ReturnType<typeof useStudentNotesMutation>;
export type StudentNotesMutationResult = Apollo.MutationResult<StudentNotesMutation>;
export type StudentNotesMutationOptions = Apollo.BaseMutationOptions<StudentNotesMutation, StudentNotesMutationVariables>;
export const ActivitiesDocument = gql`
    query activities($take: Int, $skip: Int, $orderBy: ActivityOrderByInput) {
  activities(take: $take, skip: $skip, orderBy: $orderBy) {
    ...Activity
  }
  _activitiesMeta {
    count
  }
}
    ${ActivityFragmentDoc}`;

/**
 * __useActivitiesQuery__
 *
 * To run a query within a React component, call `useActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivitiesQuery({
 *   variables: {
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useActivitiesQuery(baseOptions?: Apollo.QueryHookOptions<ActivitiesQuery, ActivitiesQueryVariables>) {
        return Apollo.useQuery<ActivitiesQuery, ActivitiesQueryVariables>(ActivitiesDocument, baseOptions);
      }
export function useActivitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActivitiesQuery, ActivitiesQueryVariables>) {
          return Apollo.useLazyQuery<ActivitiesQuery, ActivitiesQueryVariables>(ActivitiesDocument, baseOptions);
        }
export type ActivitiesQueryHookResult = ReturnType<typeof useActivitiesQuery>;
export type ActivitiesLazyQueryHookResult = ReturnType<typeof useActivitiesLazyQuery>;
export type ActivitiesQueryResult = Apollo.QueryResult<ActivitiesQuery, ActivitiesQueryVariables>;
export const ActivityDocument = gql`
    query Activity($slug: String!) {
  activity(where: {slug: $slug}) {
    ...Activity
  }
}
    ${ActivityFragmentDoc}`;

/**
 * __useActivityQuery__
 *
 * To run a query within a React component, call `useActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivityQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useActivityQuery(baseOptions?: Apollo.QueryHookOptions<ActivityQuery, ActivityQueryVariables>) {
        return Apollo.useQuery<ActivityQuery, ActivityQueryVariables>(ActivityDocument, baseOptions);
      }
export function useActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActivityQuery, ActivityQueryVariables>) {
          return Apollo.useLazyQuery<ActivityQuery, ActivityQueryVariables>(ActivityDocument, baseOptions);
        }
export type ActivityQueryHookResult = ReturnType<typeof useActivityQuery>;
export type ActivityLazyQueryHookResult = ReturnType<typeof useActivityLazyQuery>;
export type ActivityQueryResult = Apollo.QueryResult<ActivityQuery, ActivityQueryVariables>;
export const FormationsDocument = gql`
    query Formations {
  formations {
    ...Formation
  }
}
    ${FormationFragmentDoc}`;

/**
 * __useFormationsQuery__
 *
 * To run a query within a React component, call `useFormationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFormationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFormationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFormationsQuery(baseOptions?: Apollo.QueryHookOptions<FormationsQuery, FormationsQueryVariables>) {
        return Apollo.useQuery<FormationsQuery, FormationsQueryVariables>(FormationsDocument, baseOptions);
      }
export function useFormationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FormationsQuery, FormationsQueryVariables>) {
          return Apollo.useLazyQuery<FormationsQuery, FormationsQueryVariables>(FormationsDocument, baseOptions);
        }
export type FormationsQueryHookResult = ReturnType<typeof useFormationsQuery>;
export type FormationsLazyQueryHookResult = ReturnType<typeof useFormationsLazyQuery>;
export type FormationsQueryResult = Apollo.QueryResult<FormationsQuery, FormationsQueryVariables>;
export const FormationsWithClassesDocument = gql`
    query FormationsWithClasses {
  formations {
    ...Formation
    classes {
      ...Class
    }
  }
}
    ${FormationFragmentDoc}
${ClassFragmentDoc}`;

/**
 * __useFormationsWithClassesQuery__
 *
 * To run a query within a React component, call `useFormationsWithClassesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFormationsWithClassesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFormationsWithClassesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFormationsWithClassesQuery(baseOptions?: Apollo.QueryHookOptions<FormationsWithClassesQuery, FormationsWithClassesQueryVariables>) {
        return Apollo.useQuery<FormationsWithClassesQuery, FormationsWithClassesQueryVariables>(FormationsWithClassesDocument, baseOptions);
      }
export function useFormationsWithClassesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FormationsWithClassesQuery, FormationsWithClassesQueryVariables>) {
          return Apollo.useLazyQuery<FormationsWithClassesQuery, FormationsWithClassesQueryVariables>(FormationsWithClassesDocument, baseOptions);
        }
export type FormationsWithClassesQueryHookResult = ReturnType<typeof useFormationsWithClassesQuery>;
export type FormationsWithClassesLazyQueryHookResult = ReturnType<typeof useFormationsWithClassesLazyQuery>;
export type FormationsWithClassesQueryResult = Apollo.QueryResult<FormationsWithClassesQuery, FormationsWithClassesQueryVariables>;
export const PublicStudentsDocument = gql`
    query PublicStudents($classId: String!) {
  publicStudents(where: {classId: $classId}) {
    id
    fullName
    cef
    cin
  }
}
    `;

/**
 * __usePublicStudentsQuery__
 *
 * To run a query within a React component, call `usePublicStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicStudentsQuery({
 *   variables: {
 *      classId: // value for 'classId'
 *   },
 * });
 */
export function usePublicStudentsQuery(baseOptions?: Apollo.QueryHookOptions<PublicStudentsQuery, PublicStudentsQueryVariables>) {
        return Apollo.useQuery<PublicStudentsQuery, PublicStudentsQueryVariables>(PublicStudentsDocument, baseOptions);
      }
export function usePublicStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublicStudentsQuery, PublicStudentsQueryVariables>) {
          return Apollo.useLazyQuery<PublicStudentsQuery, PublicStudentsQueryVariables>(PublicStudentsDocument, baseOptions);
        }
export type PublicStudentsQueryHookResult = ReturnType<typeof usePublicStudentsQuery>;
export type PublicStudentsLazyQueryHookResult = ReturnType<typeof usePublicStudentsLazyQuery>;
export type PublicStudentsQueryResult = Apollo.QueryResult<PublicStudentsQuery, PublicStudentsQueryVariables>;