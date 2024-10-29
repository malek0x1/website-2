"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[8779],{80258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var i=n(74848),s=n(28453);const l={},r="Write strategies",a={id:"guides/load/write-strategies",title:"Write strategies",description:"When loading a file to a database table you can specify how to data is written to the table.",source:"@site/docs/0300-guides/200-load/160-write-strategies.mdx",sourceDirName:"0300-guides/200-load",slug:"/guides/load/write-strategies",permalink:"/starlake/docs/guides/load/write-strategies",draft:!1,unlisted:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/docs/0300-guides/200-load/160-write-strategies.mdx",tags:[],version:"current",sidebarPosition:160,frontMatter:{},sidebar:"starlakeSidebar",previous:{title:"Load strategies",permalink:"/starlake/docs/guides/load/load-strategies"},next:{title:"Clustering and Partitioning",permalink:"/starlake/docs/guides/load/sink"}},d={},o=[{value:"APPEND",id:"append",level:2},{value:"OVERWRITE",id:"overwrite",level:2},{value:"OVERWRITE_BY_KEY",id:"overwrite_by_key",level:2},{value:"OVERWRITE_BY_KEY_AND_TIMESTAMP",id:"overwrite_by_key_and_timestamp",level:2},{value:"OVERWRITE_BY_PARTITION",id:"overwrite_by_partition",level:2},{value:"DELETE_THEN_INSERT",id:"delete_then_insert",level:2},{value:"SCD2",id:"scd2",level:2},{value:"Adaptive write strategy",id:"adaptive-write-strategy",level:2},{value:"List of criterias",id:"list-of-criterias",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"write-strategies",children:"Write strategies"})}),"\n",(0,i.jsxs)(t.p,{children:["When loading a file to a database table you can specify how to data is written to the table.\nThat's what the ",(0,i.jsx)(t.code,{children:"metadata.writeStrategy"})," property is for."]}),"\n",(0,i.jsx)(t.p,{children:"The following strategies are available:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Strategy"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"APPEND"}),(0,i.jsx)(t.td,{children:"Insert all rows into the table. If the table already contains data, the new rows will be appended."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"OVERWRITE"}),(0,i.jsx)(t.td,{children:"Replace all rows in the table with the new rows. This will delete all existing rows and insert the new ones."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"OVERWRITE_BY_KEY"}),(0,i.jsx)(t.td,{children:"Merge the new rows with the existing rows. If a row with the same key already exists in the table, the new row will overwrite the old one otherwise it will be appended."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"OVERWRITE_BY_KEY_AND_TIMESTAMP"}),(0,i.jsx)(t.td,{children:"Merge the new rows with the existing rows. If a row with the same key and an older timestamp already exists in the table, the new row will overwrite the old one otherwise it will be appended."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"OVERWRITE_BY_PARTITION"}),(0,i.jsx)(t.td,{children:"Merge the new rows with the existing rows. All existing partitions present in the new data will be overwritten. All other partitions will be left untouched and new partitions will be appended."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"DELETE_THEN_INSERT"}),(0,i.jsx)(t.td,{children:"Delete rows in the target table for which records with the same keys exist in the incoming data, before inserting the incoming rows."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SCD2"}),(0,i.jsxs)(t.td,{children:["Merge the new rows with the existing rows using the ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Slowly_changing_dimension",children:"Slowly Changing Dimension Type 2"})," strategy. This will keep track of the history of the rows in the table."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ADAPTATIVE"}),(0,i.jsx)(t.td,{children:"The write strategy will be determined at runtime based on the properties of the file being loaded."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"append",children:"APPEND"}),"\n",(0,i.jsx)(t.p,{children:"If the table does not exist, it will be created. If the table already contains data, the new rows will be appended."}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:'title="Append to the table."',children:'table:\n  pattern: "<table>.*.csv"\n  metadata:\n    ...\n    writeStrategy:\n      type: "APPEND"\n  attributes:\n    - ...\n'})}),"\n",(0,i.jsx)(t.h2,{id:"overwrite",children:"OVERWRITE"}),"\n",(0,i.jsx)(t.p,{children:"If the table does not exist, it will be created.\nReplace all rows in the table with the new rows. This will delete all existing rows and insert the new ones."}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:'title="Overwrite the table."',children:'table:\n  pattern: "<table>.*.csv"\n  metadata:\n    ...\n    writeStrategy:\n      type: "OVERWRITE"\n  attributes:\n    - ...\n'})}),"\n",(0,i.jsx)(t.h2,{id:"overwrite_by_key",children:"OVERWRITE_BY_KEY"}),"\n",(0,i.jsx)(t.p,{children:"If the table does not exist, it will be created.\nMerge the new rows with the existing rows.\nIf a row with the same key already exists in the table,\nthe new row will overwrite the old one otherwise it will be appended."}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:"title=\"Overwrite by key. The column 'id' is used as key.\"",children:'table:\n  pattern: "<table>.*.csv"\n  metadata:\n    ...\n    writeStrategy:\n      type: "OVERWRITE_BY_KEY"\n      key: ["id"]\n      on: TARGET\n  attributes:\n    - ...\n'})}),"\n",(0,i.jsx)(t.h2,{id:"overwrite_by_key_and_timestamp",children:"OVERWRITE_BY_KEY_AND_TIMESTAMP"}),"\n",(0,i.jsx)(t.p,{children:"If the table does not exist, it will be created.\nMerge the new rows with the existing rows. If a row with the same key and an older timestamp already exists in the table, the new row will overwrite the old one otherwise it will be appended."}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:"title=\"Overwrite by key and timestamp. The column 'id' is used as key.\"",children:'table:\n  pattern: "<table>.*.csv"\n  metadata:\n    ...\n    writeStrategy:\n      type: "OVERWRITE_BY_KEY_AND_TIMESTAMP"\n      key: ["id"]\n      timestamp: "valid_from"\n      on: TARGET\n  attributes:\n    - ...\n'})}),"\n",(0,i.jsx)(t.h2,{id:"overwrite_by_partition",children:"OVERWRITE_BY_PARTITION"}),"\n",(0,i.jsx)(t.p,{children:"If the table does not exist, it will be created.\nMerge the new rows with the existing rows. All existing partitions present in the new data will be overwritten. All other partitions will be left untouched and new partitions will be appended."}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:'title="Overwrite by partition. Require the partition property to be set in the metadata.sink section."',children:'table:\n  pattern: "<table>.*.csv"\n  metadata:\n    ...\n    writeStrategy:\n      type: "OVERWRITE_BY_PARTITION"\n      on: TARGET\n  attributes:\n    - ...\n'})}),"\n",(0,i.jsx)(t.h2,{id:"delete_then_insert",children:"DELETE_THEN_INSERT"}),"\n",(0,i.jsx)(t.p,{children:"If the table does not exist, it will be created.\nDelete rows in the target table for which records with the same keys exist in the incoming data, before inserting the incoming rows."}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:'title="Delete then insert"',children:'table:\n  pattern: "<table>.*.csv"\n  metadata:\n    ...\n    writeStrategy:\n      type: "DELETE_THEN_INSERT"\n      key: ["id", "name" ...]\n  attributes:\n    - ...\n'})}),"\n",(0,i.jsx)(t.h2,{id:"scd2",children:"SCD2"}),"\n",(0,i.jsxs)(t.p,{children:["If the table does not exist, it will be created.\nMerge the new rows with the existing rows using the ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Slowly_changing_dimension",children:"Slowly Changing Dimension Type 2"})," strategy. This will keep track of the history of the rows in the table."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:"title=\"Slow changing dimension Type 2. The column 'id' is used as key and the column 'date' is used as timestamp.\"",children:'table:\n  pattern: "<table>.*.csv"\n  metadata:\n    ...\n    writeStrategy:\n      type: "SCD2"\n      key: ["id"]\n      timestamp: "date"\n      startTs: "valid_from"\n      endTs: "valid_to"\n      on: BOTH\n  attributes:\n    - ...\n'})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(t.p,{children:["the ",(0,i.jsx)(t.code,{children:"startTs"})," and ",(0,i.jsx)(t.code,{children:"endTs"})," properties are used to specify the names of the columns that will be used to store the start and end timestamps of the rows."]}),"\n",(0,i.jsxs)(t.p,{children:["They may be omitted. In that case, the default values ",(0,i.jsx)(t.code,{children:"sl_start_ts"})," and ",(0,i.jsx)(t.code,{children:"sl_end_ts"})," will be used."]}),"\n",(0,i.jsxs)(t.p,{children:["These default values may be changed in the ",(0,i.jsx)(t.code,{children:"metadata/application.sl.yml"})," file by setting the following global variables ."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:'application:\n  ...\n  scd2StartTimestamp: "sl_start_ts"\n  scd2EndTimestamp: "sl_end_ts"\n'})}),"\n",(0,i.jsx)(t.h2,{id:"adaptive-write-strategy",children:"Adaptive write strategy"}),"\n",(0,i.jsx)(t.p,{children:"Have you ever needed to change the way you feed your table from time to time or periodically?\nAdaptive Write may be the solution to your need. This feature allows you to adjust the loading mode at runtime,\naccording to various criteria listed in the table below."}),"\n",(0,i.jsx)(t.p,{children:"For example, you want to ingest in APPEND mode throughout the week,\nexcept on Sundays when the source sends you all of certain tables,\nas discrepancies may occur with the incremental mode.\nThis can be done automatically by changing the domain or table configuration."}),"\n",(0,i.jsx)(t.p,{children:"The example below illustrates the change at domain level that will be propagated to all these tables."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"# _config.sl.yml\nload:\n   name: \"DOMAIN\n   metadata:\n      ...\n      writeStrategy:\n         types:\n             APPEND: 'dayOfWeek != 7'\n             OVERWRITE: 'dayOfWeek == 7'\n"})}),"\n",(0,i.jsx)(t.p,{children:"Another example is based on the file name:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:'# _config.sl.yml\nload:\n   name: "DOMAIN"\n   metadata:\n      ...\n      writeStrategy:\n         types:\n             OVERWRITE: \'group("mode") == "FULL"\'\n             APPEND: \'group("mode") == "APPEND"\'\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:'#my_table.sl.yml\ntable:\n  ...\n  pattern: ".*-(?<mode>FULL|APPEND).csv$"\n'})}),"\n",(0,i.jsxs)(t.p,{children:["You may want to combine these criteria. If so, just use regular boolean operators with ",(0,i.jsx)(t.code,{children:"!"}),", ",(0,i.jsx)(t.code,{children:"&&"}),"and ",(0,i.jsx)(t.code,{children:"||"})," and wrap with parenthesis if necessary."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["When using String in expression, makes sure to wrap them with double quotes ",(0,i.jsx)(t.code,{children:'"'})]})}),"\n",(0,i.jsx)(t.h3,{id:"list-of-criterias",children:"List of criterias"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Criteria"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Example"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"group(index or name)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"File pattern must use (named) capture groups"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"pattern: `my-file-(F"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"fileSize"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Current file size in bytes"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"fileSize > 1000"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"fileSizeB"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Current file size in bytes. Alias of fileSize"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"fileSizeKo"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Current file size in Ko"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"fileSizeMo"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Current file size in Mo"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"fileSizeGo"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Current file size in Go"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"fileSizeTo"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Current file size in To"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"isFirstDayOfMonth"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Current day is first day of month"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"isLastDayOfMonth"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Current day is last day of month"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"dayOfWeek"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Integer representing day of week. Monday = 1, ..., Sunday = 7"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"isFileFirstDayOfMonth"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"File modification date is first day of month"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"isFileLastDayOfMonth"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"File modification date is last day of month"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"fileDayOfWeek"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Integer representing file modification day of week. Monday = 1, ..., Sunday = 7"}),(0,i.jsx)(t.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["For a criteria relying on datetime, you can change its timezone with ",(0,i.jsx)(t.code,{children:"timezone"})," application settings in ",(0,i.jsx)(t.code,{children:"application.sl.yml"})]})})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},l=i.createContext(s);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);