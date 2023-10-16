# 課題

# 概要
Prismaとtypescriptの勉強用

# 使用環境
起動を確認している環境は以下の通りです。<br>
< OS > Mac Ventura 13.2.1<br>
< Node.js > 20.8.0<br>
< Prisma > 10.2.0<br>
< TypeScript > 5.2.2<br>
< Yargs > 17.7.2

# 使い方
- 課題3の場合
	- 1. kadai_scriptフォルダ下に移動して以下のコマンドを実行します。<br>
		- `$ npx ts-node kadai3.ts`<br>
			- [オプション] : <br>
			- -n, --name		従業員名		[文字列]

	- 2. 引数で指定した従業員がアサインされているタスクがコマンドライン上に表示されます。<br>
	（引数を渡さない場合、「中村四郎」がアサインされているタスクが表示されます。） <br><br>

- 課題4の場合
	- 1. kadai_scriptフォルダ下に移動して以下のコマンドを実行します。<br>
		- `$ npx ts-node kadai4.ts` <br>
			- [オプション] : <br>
			-p, --potision	ポジション名	[文字列]

	- 2. 引数で指定したポジションに所属する全従業員の情報がコマンドライン上に表示されます。<br>
	（引数を渡さない場合、「一般社員」に所属する従業員情報が表示されます。）<br><br>

- 課題5の場合
	- 1. kadai_scriptフォルダ下に移動して以下のコマンドを実行します。<br>
		- `$ npx ts-node kadai5.ts` <br>

	- 2. 各部署に所属する従業員数がカウントされてコマンドライン上に表示されます。<br>

- 課題6の場合
	- 1. kadai_scriptフォルダ下に移動して以下のコマンドを実行します。<br>
		- `$ npx ts-node kadai6.ts` <br>
			- [オプション]：<br>
			n, --name		従業員名	[文字列]

	- 2. 引数で指定した従業員がアサインされているタスクから未完了のタスクがコマンドライン上に表示されます。<br>
	（引数を渡さない場合、「中村四郎」がアサインされている未完了のタスクが表示されます。）

- 課題7の場合
	- 1. kadai_scriptフォルダ下に移動して以下のコマンドを実行します。<br>
		- `$ npx ts-node kadai7.ts` <br>
			- [オプション]：<br>
			d, --department	部署名		[文字列]

	- 2. 引数で指定した部署に所属する従業員がアサインされているタスク数がカウントされてコマンドライン上に表示されます。<br>
	（引数を渡さない場合、「開発チーム」に所属する従業員がアサインされているタスク数が表示されます。）