export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  interval: any;
  smallint: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]>;
  _gt?: InputMaybe<Scalars["Int"]>;
  _gte?: InputMaybe<Scalars["Int"]>;
  _in?: InputMaybe<Array<Scalars["Int"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Int"]>;
  _lte?: InputMaybe<Scalars["Int"]>;
  _neq?: InputMaybe<Scalars["Int"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]>;
  _gt?: InputMaybe<Scalars["String"]>;
  _gte?: InputMaybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]>;
  _in?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]>;
  _lt?: InputMaybe<Scalars["String"]>;
  _lte?: InputMaybe<Scalars["String"]>;
  _neq?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]>;
  _nin?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: "categories";
  car?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  /** An array relationship */
  laps: Array<Laps>;
  /** An aggregate relationship */
  laps_aggregate: Laps_Aggregate;
  name: Scalars["String"];
};

/** columns and relationships of "categories" */
export type CategoriesLapsArgs = {
  distinct_on?: InputMaybe<Array<Laps_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Laps_Order_By>>;
  where?: InputMaybe<Laps_Bool_Exp>;
};

/** columns and relationships of "categories" */
export type CategoriesLaps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laps_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Laps_Order_By>>;
  where?: InputMaybe<Laps_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: "categories_aggregate";
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: "categories_aggregate_fields";
  avg?: Maybe<Categories_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
  stddev?: Maybe<Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Categories_Sum_Fields>;
  var_pop?: Maybe<Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Categories_Var_Samp_Fields>;
  variance?: Maybe<Categories_Variance_Fields>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
  __typename?: "categories_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  car?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  laps?: InputMaybe<Laps_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint */
  CategoriesNameKey = "categories_name_key",
  /** unique or primary key constraint */
  CategoriesPkey = "categories_pkey",
}

/** input type for incrementing numeric columns in table "categories" */
export type Categories_Inc_Input = {
  id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  car?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Int"]>;
  laps?: InputMaybe<Laps_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: "categories_max_fields";
  car?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: "categories_min_fields";
  car?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: "categories_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** on_conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  car?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  laps_aggregate?: InputMaybe<Laps_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  Car = "car",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  car?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
  __typename?: "categories_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
  __typename?: "categories_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
  __typename?: "categories_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
  __typename?: "categories_sum_fields";
  id?: Maybe<Scalars["Int"]>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  Car = "car",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
  __typename?: "categories_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
  __typename?: "categories_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
  __typename?: "categories_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to compare columns of type "interval". All fields are combined with logical 'AND'. */
export type Interval_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["interval"]>;
  _gt?: InputMaybe<Scalars["interval"]>;
  _gte?: InputMaybe<Scalars["interval"]>;
  _in?: InputMaybe<Array<Scalars["interval"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["interval"]>;
  _lte?: InputMaybe<Scalars["interval"]>;
  _neq?: InputMaybe<Scalars["interval"]>;
  _nin?: InputMaybe<Array<Scalars["interval"]>>;
};

/** columns and relationships of "laps" */
export type Laps = {
  __typename?: "laps";
  /** An object relationship */
  category: Categories;
  category_id: Scalars["Int"];
  created_at: Scalars["timestamptz"];
  id: Scalars["Int"];
  s1: Scalars["interval"];
  s2: Scalars["interval"];
  s3?: Maybe<Scalars["interval"]>;
  s4?: Maybe<Scalars["interval"]>;
  s5?: Maybe<Scalars["interval"]>;
  s6?: Maybe<Scalars["interval"]>;
  s7?: Maybe<Scalars["interval"]>;
  s8?: Maybe<Scalars["interval"]>;
  /** An object relationship */
  track: Tracks;
  track_id: Scalars["Int"];
};

/** aggregated selection of "laps" */
export type Laps_Aggregate = {
  __typename?: "laps_aggregate";
  aggregate?: Maybe<Laps_Aggregate_Fields>;
  nodes: Array<Laps>;
};

/** aggregate fields of "laps" */
export type Laps_Aggregate_Fields = {
  __typename?: "laps_aggregate_fields";
  avg?: Maybe<Laps_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Laps_Max_Fields>;
  min?: Maybe<Laps_Min_Fields>;
  stddev?: Maybe<Laps_Stddev_Fields>;
  stddev_pop?: Maybe<Laps_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Laps_Stddev_Samp_Fields>;
  sum?: Maybe<Laps_Sum_Fields>;
  var_pop?: Maybe<Laps_Var_Pop_Fields>;
  var_samp?: Maybe<Laps_Var_Samp_Fields>;
  variance?: Maybe<Laps_Variance_Fields>;
};

/** aggregate fields of "laps" */
export type Laps_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Laps_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "laps" */
export type Laps_Aggregate_Order_By = {
  avg?: InputMaybe<Laps_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Laps_Max_Order_By>;
  min?: InputMaybe<Laps_Min_Order_By>;
  stddev?: InputMaybe<Laps_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Laps_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Laps_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Laps_Sum_Order_By>;
  var_pop?: InputMaybe<Laps_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Laps_Var_Samp_Order_By>;
  variance?: InputMaybe<Laps_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "laps" */
export type Laps_Arr_Rel_Insert_Input = {
  data: Array<Laps_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Laps_On_Conflict>;
};

/** aggregate avg on columns */
export type Laps_Avg_Fields = {
  __typename?: "laps_avg_fields";
  category_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  track_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "laps" */
export type Laps_Avg_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  track_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "laps". All fields are combined with a logical 'AND'. */
export type Laps_Bool_Exp = {
  _and?: InputMaybe<Array<Laps_Bool_Exp>>;
  _not?: InputMaybe<Laps_Bool_Exp>;
  _or?: InputMaybe<Array<Laps_Bool_Exp>>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  s1?: InputMaybe<Interval_Comparison_Exp>;
  s2?: InputMaybe<Interval_Comparison_Exp>;
  s3?: InputMaybe<Interval_Comparison_Exp>;
  s4?: InputMaybe<Interval_Comparison_Exp>;
  s5?: InputMaybe<Interval_Comparison_Exp>;
  s6?: InputMaybe<Interval_Comparison_Exp>;
  s7?: InputMaybe<Interval_Comparison_Exp>;
  s8?: InputMaybe<Interval_Comparison_Exp>;
  track?: InputMaybe<Tracks_Bool_Exp>;
  track_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "laps" */
export enum Laps_Constraint {
  /** unique or primary key constraint */
  LapsPkey = "laps_pkey",
}

/** input type for incrementing numeric columns in table "laps" */
export type Laps_Inc_Input = {
  category_id?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["Int"]>;
  track_id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "laps" */
export type Laps_Insert_Input = {
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars["Int"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["Int"]>;
  s1?: InputMaybe<Scalars["interval"]>;
  s2?: InputMaybe<Scalars["interval"]>;
  s3?: InputMaybe<Scalars["interval"]>;
  s4?: InputMaybe<Scalars["interval"]>;
  s5?: InputMaybe<Scalars["interval"]>;
  s6?: InputMaybe<Scalars["interval"]>;
  s7?: InputMaybe<Scalars["interval"]>;
  s8?: InputMaybe<Scalars["interval"]>;
  track?: InputMaybe<Tracks_Obj_Rel_Insert_Input>;
  track_id?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Laps_Max_Fields = {
  __typename?: "laps_max_fields";
  category_id?: Maybe<Scalars["Int"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  track_id?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "laps" */
export type Laps_Max_Order_By = {
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  track_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Laps_Min_Fields = {
  __typename?: "laps_min_fields";
  category_id?: Maybe<Scalars["Int"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  track_id?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "laps" */
export type Laps_Min_Order_By = {
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  track_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "laps" */
export type Laps_Mutation_Response = {
  __typename?: "laps_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Laps>;
};

/** on_conflict condition type for table "laps" */
export type Laps_On_Conflict = {
  constraint: Laps_Constraint;
  update_columns?: Array<Laps_Update_Column>;
  where?: InputMaybe<Laps_Bool_Exp>;
};

/** Ordering options when selecting data from "laps". */
export type Laps_Order_By = {
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  s1?: InputMaybe<Order_By>;
  s2?: InputMaybe<Order_By>;
  s3?: InputMaybe<Order_By>;
  s4?: InputMaybe<Order_By>;
  s5?: InputMaybe<Order_By>;
  s6?: InputMaybe<Order_By>;
  s7?: InputMaybe<Order_By>;
  s8?: InputMaybe<Order_By>;
  track?: InputMaybe<Tracks_Order_By>;
  track_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: laps */
export type Laps_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "laps" */
export enum Laps_Select_Column {
  /** column name */
  CategoryId = "category_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  S1 = "s1",
  /** column name */
  S2 = "s2",
  /** column name */
  S3 = "s3",
  /** column name */
  S4 = "s4",
  /** column name */
  S5 = "s5",
  /** column name */
  S6 = "s6",
  /** column name */
  S7 = "s7",
  /** column name */
  S8 = "s8",
  /** column name */
  TrackId = "track_id",
}

/** input type for updating data in table "laps" */
export type Laps_Set_Input = {
  category_id?: InputMaybe<Scalars["Int"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]>;
  id?: InputMaybe<Scalars["Int"]>;
  s1?: InputMaybe<Scalars["interval"]>;
  s2?: InputMaybe<Scalars["interval"]>;
  s3?: InputMaybe<Scalars["interval"]>;
  s4?: InputMaybe<Scalars["interval"]>;
  s5?: InputMaybe<Scalars["interval"]>;
  s6?: InputMaybe<Scalars["interval"]>;
  s7?: InputMaybe<Scalars["interval"]>;
  s8?: InputMaybe<Scalars["interval"]>;
  track_id?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Laps_Stddev_Fields = {
  __typename?: "laps_stddev_fields";
  category_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  track_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "laps" */
export type Laps_Stddev_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  track_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Laps_Stddev_Pop_Fields = {
  __typename?: "laps_stddev_pop_fields";
  category_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  track_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "laps" */
export type Laps_Stddev_Pop_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  track_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Laps_Stddev_Samp_Fields = {
  __typename?: "laps_stddev_samp_fields";
  category_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  track_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "laps" */
export type Laps_Stddev_Samp_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  track_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Laps_Sum_Fields = {
  __typename?: "laps_sum_fields";
  category_id?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  track_id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "laps" */
export type Laps_Sum_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  track_id?: InputMaybe<Order_By>;
};

/** update columns of table "laps" */
export enum Laps_Update_Column {
  /** column name */
  CategoryId = "category_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  S1 = "s1",
  /** column name */
  S2 = "s2",
  /** column name */
  S3 = "s3",
  /** column name */
  S4 = "s4",
  /** column name */
  S5 = "s5",
  /** column name */
  S6 = "s6",
  /** column name */
  S7 = "s7",
  /** column name */
  S8 = "s8",
  /** column name */
  TrackId = "track_id",
}

/** aggregate var_pop on columns */
export type Laps_Var_Pop_Fields = {
  __typename?: "laps_var_pop_fields";
  category_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  track_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "laps" */
export type Laps_Var_Pop_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  track_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Laps_Var_Samp_Fields = {
  __typename?: "laps_var_samp_fields";
  category_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  track_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "laps" */
export type Laps_Var_Samp_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  track_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Laps_Variance_Fields = {
  __typename?: "laps_variance_fields";
  category_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  track_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "laps" */
export type Laps_Variance_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  track_id?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "laps" */
  delete_laps?: Maybe<Laps_Mutation_Response>;
  /** delete single row from the table: "laps" */
  delete_laps_by_pk?: Maybe<Laps>;
  /** delete data from the table: "test" */
  delete_test?: Maybe<Test_Mutation_Response>;
  /** delete single row from the table: "test" */
  delete_test_by_pk?: Maybe<Test>;
  /** delete data from the table: "tracks" */
  delete_tracks?: Maybe<Tracks_Mutation_Response>;
  /** delete single row from the table: "tracks" */
  delete_tracks_by_pk?: Maybe<Tracks>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "laps" */
  insert_laps?: Maybe<Laps_Mutation_Response>;
  /** insert a single row into the table: "laps" */
  insert_laps_one?: Maybe<Laps>;
  /** insert data into the table: "test" */
  insert_test?: Maybe<Test_Mutation_Response>;
  /** insert a single row into the table: "test" */
  insert_test_one?: Maybe<Test>;
  /** insert data into the table: "tracks" */
  insert_tracks?: Maybe<Tracks_Mutation_Response>;
  /** insert a single row into the table: "tracks" */
  insert_tracks_one?: Maybe<Tracks>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update data of the table: "laps" */
  update_laps?: Maybe<Laps_Mutation_Response>;
  /** update single row of the table: "laps" */
  update_laps_by_pk?: Maybe<Laps>;
  /** update data of the table: "test" */
  update_test?: Maybe<Test_Mutation_Response>;
  /** update single row of the table: "test" */
  update_test_by_pk?: Maybe<Test>;
  /** update data of the table: "tracks" */
  update_tracks?: Maybe<Tracks_Mutation_Response>;
  /** update single row of the table: "tracks" */
  update_tracks_by_pk?: Maybe<Tracks>;
};

/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_LapsArgs = {
  where: Laps_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Laps_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_TestArgs = {
  where: Test_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Test_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_TracksArgs = {
  where: Tracks_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Tracks_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_LapsArgs = {
  objects: Array<Laps_Insert_Input>;
  on_conflict?: InputMaybe<Laps_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Laps_OneArgs = {
  object: Laps_Insert_Input;
  on_conflict?: InputMaybe<Laps_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_TestArgs = {
  objects: Array<Test_Insert_Input>;
  on_conflict?: InputMaybe<Test_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Test_OneArgs = {
  object: Test_Insert_Input;
  on_conflict?: InputMaybe<Test_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_TracksArgs = {
  objects: Array<Tracks_Insert_Input>;
  on_conflict?: InputMaybe<Tracks_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Tracks_OneArgs = {
  object: Tracks_Insert_Input;
  on_conflict?: InputMaybe<Tracks_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>;
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>;
  _set?: InputMaybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_LapsArgs = {
  _inc?: InputMaybe<Laps_Inc_Input>;
  _set?: InputMaybe<Laps_Set_Input>;
  where: Laps_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Laps_By_PkArgs = {
  _inc?: InputMaybe<Laps_Inc_Input>;
  _set?: InputMaybe<Laps_Set_Input>;
  pk_columns: Laps_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_TestArgs = {
  _inc?: InputMaybe<Test_Inc_Input>;
  _set?: InputMaybe<Test_Set_Input>;
  where: Test_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Test_By_PkArgs = {
  _inc?: InputMaybe<Test_Inc_Input>;
  _set?: InputMaybe<Test_Set_Input>;
  pk_columns: Test_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_TracksArgs = {
  _inc?: InputMaybe<Tracks_Inc_Input>;
  _set?: InputMaybe<Tracks_Set_Input>;
  where: Tracks_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Tracks_By_PkArgs = {
  _inc?: InputMaybe<Tracks_Inc_Input>;
  _set?: InputMaybe<Tracks_Set_Input>;
  pk_columns: Tracks_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** An array relationship */
  laps: Array<Laps>;
  /** An aggregate relationship */
  laps_aggregate: Laps_Aggregate;
  /** fetch data from the table: "laps" using primary key columns */
  laps_by_pk?: Maybe<Laps>;
  /** fetch data from the table: "test" */
  test: Array<Test>;
  /** fetch aggregated fields from the table: "test" */
  test_aggregate: Test_Aggregate;
  /** fetch data from the table: "test" using primary key columns */
  test_by_pk?: Maybe<Test>;
  /** fetch data from the table: "tracks" */
  tracks: Array<Tracks>;
  /** fetch aggregated fields from the table: "tracks" */
  tracks_aggregate: Tracks_Aggregate;
  /** fetch data from the table: "tracks" using primary key columns */
  tracks_by_pk?: Maybe<Tracks>;
};

export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

export type Query_RootCategories_By_PkArgs = {
  id: Scalars["Int"];
};

export type Query_RootLapsArgs = {
  distinct_on?: InputMaybe<Array<Laps_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Laps_Order_By>>;
  where?: InputMaybe<Laps_Bool_Exp>;
};

export type Query_RootLaps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laps_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Laps_Order_By>>;
  where?: InputMaybe<Laps_Bool_Exp>;
};

export type Query_RootLaps_By_PkArgs = {
  id: Scalars["Int"];
};

export type Query_RootTestArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};

export type Query_RootTest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};

export type Query_RootTest_By_PkArgs = {
  id: Scalars["Int"];
};

export type Query_RootTracksArgs = {
  distinct_on?: InputMaybe<Array<Tracks_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tracks_Order_By>>;
  where?: InputMaybe<Tracks_Bool_Exp>;
};

export type Query_RootTracks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tracks_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tracks_Order_By>>;
  where?: InputMaybe<Tracks_Bool_Exp>;
};

export type Query_RootTracks_By_PkArgs = {
  id: Scalars["Int"];
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["smallint"]>;
  _gt?: InputMaybe<Scalars["smallint"]>;
  _gte?: InputMaybe<Scalars["smallint"]>;
  _in?: InputMaybe<Array<Scalars["smallint"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["smallint"]>;
  _lte?: InputMaybe<Scalars["smallint"]>;
  _neq?: InputMaybe<Scalars["smallint"]>;
  _nin?: InputMaybe<Array<Scalars["smallint"]>>;
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** An array relationship */
  laps: Array<Laps>;
  /** An aggregate relationship */
  laps_aggregate: Laps_Aggregate;
  /** fetch data from the table: "laps" using primary key columns */
  laps_by_pk?: Maybe<Laps>;
  /** fetch data from the table: "test" */
  test: Array<Test>;
  /** fetch aggregated fields from the table: "test" */
  test_aggregate: Test_Aggregate;
  /** fetch data from the table: "test" using primary key columns */
  test_by_pk?: Maybe<Test>;
  /** fetch data from the table: "tracks" */
  tracks: Array<Tracks>;
  /** fetch aggregated fields from the table: "tracks" */
  tracks_aggregate: Tracks_Aggregate;
  /** fetch data from the table: "tracks" using primary key columns */
  tracks_by_pk?: Maybe<Tracks>;
};

export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars["Int"];
};

export type Subscription_RootLapsArgs = {
  distinct_on?: InputMaybe<Array<Laps_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Laps_Order_By>>;
  where?: InputMaybe<Laps_Bool_Exp>;
};

export type Subscription_RootLaps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laps_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Laps_Order_By>>;
  where?: InputMaybe<Laps_Bool_Exp>;
};

export type Subscription_RootLaps_By_PkArgs = {
  id: Scalars["Int"];
};

export type Subscription_RootTestArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};

export type Subscription_RootTest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};

export type Subscription_RootTest_By_PkArgs = {
  id: Scalars["Int"];
};

export type Subscription_RootTracksArgs = {
  distinct_on?: InputMaybe<Array<Tracks_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tracks_Order_By>>;
  where?: InputMaybe<Tracks_Bool_Exp>;
};

export type Subscription_RootTracks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tracks_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Tracks_Order_By>>;
  where?: InputMaybe<Tracks_Bool_Exp>;
};

export type Subscription_RootTracks_By_PkArgs = {
  id: Scalars["Int"];
};

/** columns and relationships of "test" */
export type Test = {
  __typename?: "test";
  c: Scalars["interval"];
  id: Scalars["Int"];
};

/** aggregated selection of "test" */
export type Test_Aggregate = {
  __typename?: "test_aggregate";
  aggregate?: Maybe<Test_Aggregate_Fields>;
  nodes: Array<Test>;
};

/** aggregate fields of "test" */
export type Test_Aggregate_Fields = {
  __typename?: "test_aggregate_fields";
  avg?: Maybe<Test_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Test_Max_Fields>;
  min?: Maybe<Test_Min_Fields>;
  stddev?: Maybe<Test_Stddev_Fields>;
  stddev_pop?: Maybe<Test_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Test_Stddev_Samp_Fields>;
  sum?: Maybe<Test_Sum_Fields>;
  var_pop?: Maybe<Test_Var_Pop_Fields>;
  var_samp?: Maybe<Test_Var_Samp_Fields>;
  variance?: Maybe<Test_Variance_Fields>;
};

/** aggregate fields of "test" */
export type Test_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Test_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Test_Avg_Fields = {
  __typename?: "test_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "test". All fields are combined with a logical 'AND'. */
export type Test_Bool_Exp = {
  _and?: InputMaybe<Array<Test_Bool_Exp>>;
  _not?: InputMaybe<Test_Bool_Exp>;
  _or?: InputMaybe<Array<Test_Bool_Exp>>;
  c?: InputMaybe<Interval_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "test" */
export enum Test_Constraint {
  /** unique or primary key constraint */
  TestPkey = "test_pkey",
}

/** input type for incrementing numeric columns in table "test" */
export type Test_Inc_Input = {
  id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "test" */
export type Test_Insert_Input = {
  c?: InputMaybe<Scalars["interval"]>;
  id?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Test_Max_Fields = {
  __typename?: "test_max_fields";
  id?: Maybe<Scalars["Int"]>;
};

/** aggregate min on columns */
export type Test_Min_Fields = {
  __typename?: "test_min_fields";
  id?: Maybe<Scalars["Int"]>;
};

/** response of any mutation on the table "test" */
export type Test_Mutation_Response = {
  __typename?: "test_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Test>;
};

/** on_conflict condition type for table "test" */
export type Test_On_Conflict = {
  constraint: Test_Constraint;
  update_columns?: Array<Test_Update_Column>;
  where?: InputMaybe<Test_Bool_Exp>;
};

/** Ordering options when selecting data from "test". */
export type Test_Order_By = {
  c?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test */
export type Test_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "test" */
export enum Test_Select_Column {
  /** column name */
  C = "c",
  /** column name */
  Id = "id",
}

/** input type for updating data in table "test" */
export type Test_Set_Input = {
  c?: InputMaybe<Scalars["interval"]>;
  id?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Test_Stddev_Fields = {
  __typename?: "test_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Test_Stddev_Pop_Fields = {
  __typename?: "test_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Test_Stddev_Samp_Fields = {
  __typename?: "test_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Test_Sum_Fields = {
  __typename?: "test_sum_fields";
  id?: Maybe<Scalars["Int"]>;
};

/** update columns of table "test" */
export enum Test_Update_Column {
  /** column name */
  C = "c",
  /** column name */
  Id = "id",
}

/** aggregate var_pop on columns */
export type Test_Var_Pop_Fields = {
  __typename?: "test_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Test_Var_Samp_Fields = {
  __typename?: "test_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Test_Variance_Fields = {
  __typename?: "test_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["timestamptz"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]>>;
};

/** columns and relationships of "tracks" */
export type Tracks = {
  __typename?: "tracks";
  id: Scalars["Int"];
  /** An array relationship */
  laps: Array<Laps>;
  /** An aggregate relationship */
  laps_aggregate: Laps_Aggregate;
  name: Scalars["String"];
  sectors: Scalars["smallint"];
};

/** columns and relationships of "tracks" */
export type TracksLapsArgs = {
  distinct_on?: InputMaybe<Array<Laps_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Laps_Order_By>>;
  where?: InputMaybe<Laps_Bool_Exp>;
};

/** columns and relationships of "tracks" */
export type TracksLaps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Laps_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Laps_Order_By>>;
  where?: InputMaybe<Laps_Bool_Exp>;
};

/** aggregated selection of "tracks" */
export type Tracks_Aggregate = {
  __typename?: "tracks_aggregate";
  aggregate?: Maybe<Tracks_Aggregate_Fields>;
  nodes: Array<Tracks>;
};

/** aggregate fields of "tracks" */
export type Tracks_Aggregate_Fields = {
  __typename?: "tracks_aggregate_fields";
  avg?: Maybe<Tracks_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Tracks_Max_Fields>;
  min?: Maybe<Tracks_Min_Fields>;
  stddev?: Maybe<Tracks_Stddev_Fields>;
  stddev_pop?: Maybe<Tracks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tracks_Stddev_Samp_Fields>;
  sum?: Maybe<Tracks_Sum_Fields>;
  var_pop?: Maybe<Tracks_Var_Pop_Fields>;
  var_samp?: Maybe<Tracks_Var_Samp_Fields>;
  variance?: Maybe<Tracks_Variance_Fields>;
};

/** aggregate fields of "tracks" */
export type Tracks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tracks_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Tracks_Avg_Fields = {
  __typename?: "tracks_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  sectors?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "tracks". All fields are combined with a logical 'AND'. */
export type Tracks_Bool_Exp = {
  _and?: InputMaybe<Array<Tracks_Bool_Exp>>;
  _not?: InputMaybe<Tracks_Bool_Exp>;
  _or?: InputMaybe<Array<Tracks_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  laps?: InputMaybe<Laps_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  sectors?: InputMaybe<Smallint_Comparison_Exp>;
};

/** unique or primary key constraints on table "tracks" */
export enum Tracks_Constraint {
  /** unique or primary key constraint */
  TracksNameKey = "tracks_name_key",
  /** unique or primary key constraint */
  TracksPkey = "tracks_pkey",
}

/** input type for incrementing numeric columns in table "tracks" */
export type Tracks_Inc_Input = {
  id?: InputMaybe<Scalars["Int"]>;
  sectors?: InputMaybe<Scalars["smallint"]>;
};

/** input type for inserting data into table "tracks" */
export type Tracks_Insert_Input = {
  id?: InputMaybe<Scalars["Int"]>;
  laps?: InputMaybe<Laps_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars["String"]>;
  sectors?: InputMaybe<Scalars["smallint"]>;
};

/** aggregate max on columns */
export type Tracks_Max_Fields = {
  __typename?: "tracks_max_fields";
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  sectors?: Maybe<Scalars["smallint"]>;
};

/** aggregate min on columns */
export type Tracks_Min_Fields = {
  __typename?: "tracks_min_fields";
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  sectors?: Maybe<Scalars["smallint"]>;
};

/** response of any mutation on the table "tracks" */
export type Tracks_Mutation_Response = {
  __typename?: "tracks_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Tracks>;
};

/** input type for inserting object relation for remote table "tracks" */
export type Tracks_Obj_Rel_Insert_Input = {
  data: Tracks_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Tracks_On_Conflict>;
};

/** on_conflict condition type for table "tracks" */
export type Tracks_On_Conflict = {
  constraint: Tracks_Constraint;
  update_columns?: Array<Tracks_Update_Column>;
  where?: InputMaybe<Tracks_Bool_Exp>;
};

/** Ordering options when selecting data from "tracks". */
export type Tracks_Order_By = {
  id?: InputMaybe<Order_By>;
  laps_aggregate?: InputMaybe<Laps_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  sectors?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tracks */
export type Tracks_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "tracks" */
export enum Tracks_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Sectors = "sectors",
}

/** input type for updating data in table "tracks" */
export type Tracks_Set_Input = {
  id?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  sectors?: InputMaybe<Scalars["smallint"]>;
};

/** aggregate stddev on columns */
export type Tracks_Stddev_Fields = {
  __typename?: "tracks_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  sectors?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Tracks_Stddev_Pop_Fields = {
  __typename?: "tracks_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  sectors?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Tracks_Stddev_Samp_Fields = {
  __typename?: "tracks_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  sectors?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Tracks_Sum_Fields = {
  __typename?: "tracks_sum_fields";
  id?: Maybe<Scalars["Int"]>;
  sectors?: Maybe<Scalars["smallint"]>;
};

/** update columns of table "tracks" */
export enum Tracks_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Sectors = "sectors",
}

/** aggregate var_pop on columns */
export type Tracks_Var_Pop_Fields = {
  __typename?: "tracks_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  sectors?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Tracks_Var_Samp_Fields = {
  __typename?: "tracks_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  sectors?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Tracks_Variance_Fields = {
  __typename?: "tracks_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  sectors?: Maybe<Scalars["Float"]>;
};
