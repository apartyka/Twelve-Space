Twelve-Space Structure System [v0.8.1]
=====

**PLEASE NOTE:** This project is still in development, but it is ready to be used. Updates to documentation and examples will be outlined in this README file and in the gh-page. Some features may be dropped or extended for the official release. Official release date is TBD. Keep checking back, log issues/bugs, and help contribute -- Thanks!

---

## What is Twelve-Space?

This is a structure system for creating relative containers for content based in twelves. The system keeps the structures fluid to meet design needs and to allow for flexibility to focus on the context of content not pixel dimensions. 

The structure system is inspired by traditional grid systems but includes layering and expanding, allowing you to *go off the grid*.

This repository includes the Sass file for compiling the CSS to be used. The naming convention follows [BEM](http://bem.info) methodology.

**Check out some [basic demos](http://kevinmack18.github.io/Twelve-Space/)**. More examples, demos, documentation, tutorial videos coming soon.

---

### Why Twelve-Space?

Twelve-Space is more than a structure system for content, it is a developing methodology for approaching projects, design patterns, reuse, and content development. Future documentation and updates will include outlines for creating design patterns in traditional design programs (like PhotoShop, InDesign, and Illustrator). 

This system can be used for *mobile-first*  or *desktop-first*. If you start "mobile", think about how to *add columns*; if you start "desktop", think about how to *add rows*. Overall, the system is flexible to meet the needs of the content and your approach for *mobile-first*  or *desktop-first* should be based on the content itself.

When developing design or code, remember the purpose/goal of your project. The content should come first and structures need to be made to contain the content. Website pages are a series of structures that contain content and each structure should be flexible to fit the needs of the content. This system is flexible to these needs.

---

## How to Use Twelve-Space?

Follows [BEM](http://bem.info), below are the selector's naming conventions:


* `.space` : Block / Compound Block
  * Modifiers:
    1.  `.space--12`
    1.  `.space--table--12`
    2.  `.space--equal--` + `#`: # can be 1-12
* `.space__cell` : Element
  * Modifiers/Inherited Modifiers:
    1.  `.space__cell--` + `#`: # can be 1-12
    1.  `.space--table__cell` + `#`: # can be 1-12
* `.space__cell` + "option" : Element helper class 
  * Options:
    2.  `.space__cell--expand--` + `#`: # can be 1-12
    2.  `.space__cell--offset--` + `#`: # can be 1-12
    2.  `.space__cell--offset--negative--` + `#`: # can be 1-12
    2.  `.space__cell__gap--right--` + `#`: # can be 1-12
    2.  `.space__cell__gap--left--` + `#`: # can be 1-12
* `.space__cell--` + `#` + `__` + "option" : Compound block's element/block's element (block > element > child). Where # is parent's space, # can be 1-12
  * Options:
    1. `.space__cell--#` +  `__expand--` + `#`=: # can be 1-12
    1. `.space__cell--#` +  `__offset--` + `#`=: # can be 1-12
    1. `.space__cell--#` +  `__offset--negative--` + `#`: # can be 1-12
    1. `.space__cell--#` +  `__gap--left--` + `#`: # can be 1-12
    1. `.space__cell--#` +  `__gap--right--` + `#`: # can be 1-12
* `.space--table__cell--`  + `#` + `__` + "option" : Compound block's element/block's element (block > element > child). Where # is parent's space, # can be 1-12
  * Options:
    1. `.space--table__cell--#` + `__expand--` + `#`: # can be 1-12
    1. `.space--table__cell--#` + `__offset--` + `#`: # can be 1-12
    1. `.space--table__cell--#` + `__offset--negative--` + `#`: # can be 1-12
    1. `.space--table__cell--#` + `__gap--left--` + `#`: # can be 1-12
    1. `.space--table__cell--#` + `__gap--right--` + `#`: # can be 1-12


### Create Space Structures

All content containers have **`.space--12`** on block container. Child containers have **`.space__cell--`+`#`** as elements. The `#` in the elements add up to 12.

For example, a "two column structure" that has two child containers that are `space__cell--5` and `.space__cell--7` (…adds up to twelve)

#### 5-7 Example
```
	<div class="space--12">
		<div class="space__cell--5">
			I take up "5 Spaces"
		</div>
		<div class="space__cell--7">
			I take up "7 Spaces"
		</div>
	</div>
```

#### 5-7 Example (Table)

There is a modifier that can be applied to the block and element containers to make the structure follow the functionality of `<table />`. Add "table" in the block: **`.space--table--12`** and "table" to elements: `.space--table__cell--5`. 

```
	<div class="space--table--12">
		<div class="space--table__cell--5">
			I take up "5 Spaces"
		</div>
		<div class="space--table__cell--7">
			I take up "7 Spaces"
		</div>
	</div>
```

#### 5-7 Example (Table)

There is a modifier that can be applied to the block and element containers to make the structure follow the functionality of `<table />`. Add "table" in the block: **`.space--table--12`** and "table" to elements: `.space--table__cell--5`. 

```
	<div class="space--table--12">
		<div class="space--table__cell--5">
			I take up "5 Spaces"
		</div>
		<div class="space--table__cell--7">
			I take up "7 Spaces"
		</div>
	</div>
```


#### 2-10 Example
```
	<div class="space--12">
		<div class="space__cell--2">
			I take up "2 Spaces"
		</div>
		<div class="space__cell--10">
			I take up "10 Spaces"
		</div>
	</div>
```
#### 3-5-4 Tables Example with alignments

You can align vertically with tables: `.vertical-align--middle`, `.vertical-align--baseline`, `.vertical-align--text-bottom`, `.vertical-align--top`, `vertical-align--bottom`

```
	<div class="space--12">
		<div class="space__cell--3  vertical-align--top">
			I take up "3 Spaces"
			<br />
			New line.			
		</div>
		<div class="space__cell--5 vertical-align--middle">
			I am aligned in the middle vertically
		</div>
		<div class="space__cell--4 vertical-align--bottom">
			I take up "4 Spaces"
		</div>
	</div>
```

#### 2-4-2-4 Example
```
	<div class="space--12">
		<div class="space__cell--2">
			I take up "2 Spaces"
		</div>
		<div class="space__cell--4">
			I take up "4 Spaces"
		</div>
		<div class="space__cell--2">
			I take up "2 Spaces"
		</div>
		<div class="space__cell--4">
			I take up "4 Spaces"
		</div>
	</div>
```


#### 5-7 Example with Nest of 4-8
```
	<div class="space--12">
		<div class="space--12 space__cell--5">
			<h2>
				I take up "5 Spaces"
			</h2>
			<div class="space__cell--4">
				I take up "4 Spaces" of "5 Spaces"
			</div>
			<div class="space__cell--8">
				I take up "8 Spaces" of "5 Spaces"
			</div>
		</div>
		<div class="space--12 space__cell--7">
			<h2>
				I take up "7 Spaces"
			</h2>
			<div class="space__cell--4">
				I take up "4 Spaces" of "7 Spaces"
			</div>
			<div class="space__cell--8">
				I take up "8 Spaces" of "7 Spaces"
			</div>
		</div>
	</div>
```

#### 5-7 Example with Nest of 4-8 (Table)
```
	<div class="space--table--12">
		<div class="space--table--12 space--table__cell--5">
			<h2>
				I take up "5 Spaces"
			</h2>
			<div class="space--table__cell--4">
				I take up "4 Spaces" of "5 Spaces"
			</div>
			<div class="space--table__cell--8">
				I take up "8 Spaces" of "5 Spaces"
			</div>
		</div>
		<div class="space--12 space--table__cell--7">
			<h2>
				I take up "7 Spaces"
			</h2>
			<div class="space--table__cell--4">
				I take up "4 Spaces" of "7 Spaces"
			</div>
			<div class="space--table__cell--8">
				I take up "8 Spaces" of "7 Spaces"
			</div>
		</div>
	</div>
```

#### 5-7 / 7-5 Example with Nest of 4-8
```
	<div class="space--table--12">
		<div class="space__cell--5">
			<h2>
				I take up "5 Spaces"
			</h2>
		</div>
		<div class="space--12 space__cell--7">
			<h2>
				I take up "7 Spaces"
			</h2>
		</div>
		<div class="space--12 space__cell--7">
			<h2>
				I take up "7 Spaces"
			</h2>
		</div>
		<div class="space__cell--5">
			<h2>
				I take up "5 Spaces"
			</h2>
		</div>
	</div>
```

#### 5-7 / 7-5 Example with Nest of 4-8 (Table)
```
	<div class="space--table--12">
		<div class="space--table__row">
			<div class="space__cell--5">
				<h2>
					I take up "5 Spaces"
				</h2>
			</div>
			<div class="space--12 space__cell--7">
				<h2>
					I take up "7 Spaces"
				</h2>
			</div>
		</div>
		<div class="space--table__row">
			<div class="space--12 space__cell--7">
				<h2>
					I take up "7 Spaces"
				</h2>
			</div>
			<div class="space__cell--5">
				<h2>
					I take up "5 Spaces"
				</h2>
			</div>
		</div>
	</div>
```


### Layering, Offsetting, and Expanding
You can layer a space "space" on top of another to expand out of it's block container but keep the aspect-ratio of the parent's space.

Layering can happen at the *block > element level* or *block > element > child level*. Example: `.space__cell--offset--negative--2`

#### Offset
Offsetting at "block > element" is only available for "non-table" structures. Offsetting is available for "non-table" and "table" structures at the "block > element > child" level.

* block > element: Can offset/layer positive or negatively. 
  * Positive: `.space__cell--offset--` + `#`
  * Negative: `.space__cell--offset--negative--` + `#`
* block > element > child: Can offset/layer positive or negatively. Major difference between is that "child" includes the parent block's block's modifier # of spaces. Example: `.space__cell--7__offset--negative--2`
  * Positive: `.space__cell--` + `parent's space # ` + `--offset--` + `#`
  * Negative: `.space__cell--` + `parent's space # ` + `--offset--negative` + `#`
  
#### Expand
Expanding at "block > element" is only available for "non-table" structures. Expanding is available for "non-table" and "table" structures at the "block > element > child" level.

* block > element: Can expand/layer positive. 
  * `.space__cell--expand--` + `#`
* block > element > child: Can expand/layer positive or negatively. Major difference between is that "child" includes the parent block's modifier # of spaces. Example: `.space__cell--3__expand--2`
  * `.space__cell--` + `parent's space # ` + `__expand--` + `#`

#### Gaps
Added spacing to a container, can be used for both "non-table" and "table" structures.

* block > element: Can have a gap left of right of content. Uses `margin` properties. Example: `.space__cell__gap--left--2`
  * `.space__cell__gap--left--` + `#`
  * `.space__cell__gap--right--` + `#`
* block > element > child: Can have gap left of right of content. Uses `padding` properties. Major difference between is that "child" includes the parent block's modifier # of spaces and uses padding not margin. Example: `.space__cell--5__gap--left--2`
  * `.space__cell--` + `parent's space # ` + `__gap--left--` + `#`
  * `.space__cell--` + `parent's space # ` + `__gap--right--` + `#`



#### 5-7 Example with nest of 5-7 with child element expanding 2

Use block container's class (ie: `space__cell--5`) plus `__expand--` plus `#` of spaces:

```
	<div class="space--12">
		<div class="space__cell--5">
			<h2 class="space__cell--5__expand--2">
				I expand 2 spaces
			</h2>
			<p>
				I take up "5 Spaces"
			</p>
		</div>
		<div class="space__cell--7">
			<p>
				I take up "7 Spaces"
			</p>
		</div>
	</div>
```
#### 7-5 Example with child element expanding 2 reverse

Use block container's class (ie: `space__cell--7`) plus `__offset--negative--` plus `#` of spaces:

```	
	<div class="space--12">
		<div class="space__cell--5">
			<p>
				I take up "5 Spaces"
			</p>
		</div>
		<div class="space__cell--7">
			<h2 class="space__cell--7__offset--negative--2">
				I expand 2 spaces
			</h2>
			<p>
				I take up "7 Spaces"
			</p>
		</div>
	</div>
```

#### 5-7 Example with element offset 2 spaces

Use block container's class (ie: `space__cell--7`) plus `__offset--negative--` plus `#` of spaces:

```		
	<div class="space--12">
		<div class="space__cell--5">
			<p>
				I take up "5 Spaces"
			</p>
		</div>
		<div class="space__cell--7 space__cell--offset--negative--2">
			<p>
				I take up "7 Spaces" but offset "2 Spaces" negative
			</p>
		</div>
	</div>
```

**NOTE**: "space__cell--offset--negative--" does not work with Table Version.


#### 5-7-2 Example

Wait... 5+7+2=14... YES! But I am offset by "2" spaces making it: 5+7+14-2=12

Use `space__cell--offset--negative--`+`#` on element container (ie: `space__cell--offset--negative--2`)

```	
	<div class="space--12">
		<div class="space__cell--5">
			<p>
				I take up "5 Spaces"
			</p>
		</div>
		<div class="space__cell--7 space__cell--offset--negative--2">
			<p>
				I take up "7 Spaces" but offset "2 Spaces" negative
			</p>
		</div>
		<div class="space__cell--2">
			<p>
				I take up "2 Spaces"
			</p>
		</div>
	</div>
```

**NOTE**: "space__cell--offset--negative--" does not work with Table Version.


#### 5-7 Expanded Example

Yep, you can go outside of the parent container. 

Use block container's class (ie: `space__cell--7`) plus `__offset--` plus `#` of spaces:


```	
	<div class="space--12">
		<div class="space__cell--5">
			<p>
				I take up "5 Spaces"
			</p>
		</div>
		<div class="space__cell--7">
			<h2 class="space__cell--7__offset--2">
				I go outside my parent by "2 Spaces"
			</h2>
			<p>
				I take up "7 Spaces"
			</p>
		</div>
	</div>
```

#### 5-7 Expanded Example (Reverse)

Yep, you can go outside of the parent container. 

Use block container's class (ie: `space__cell--5`) plus `__offset--negative--` plus `#` of spaces:


```	
	<div class="space--12">
		<div class="space__cell--5">
			<h2 class="space__cell--5__offset--negative--2">
				I go outside my parent by "2 Spaces"
			</h2>
			<p>
				I take up "5 Spaces"
			</p>
		</div>
		<div class="space__cell--7">
			<p>
				I take up "7 Spaces"
			</p>
		</div>
	</div>
```


### Additional Structures

Additional structures to keep row height's consistent to keep a clean grid of columns and rows.

#### Width based on inner content
```
	<div class="space">
		<div class="space__cell">
			Content on left
		</div>
		<div class="space__cell">
			Content on right
		</div>
	</div>
```

#### Equal Column widths
Add `.space--equal--` + `# of columns` to block and `.space__cell` as elements. 
* Available options: `.space--equal--1`, `.space--equal--2`, `.space--equal--3`, `.space--equal--4`, `.space--equal--5`, `.space--equal--6`, `.space--equal--7`, `.space--equal--8`, `.space--equal--9`, `.space--equal--10`, `.space--equal--11`, `.space--equal--12`

#### 2 Column - Equal Widths
```
	<div class="space--equal--1">
		<div class="space__cell">
			Content on left
		</div>
		<div class="space__cell">
			Content on right
		</div>
	</div>
```

#### 3 Column - Equal Widths
```
	<div class="space--equal--3">
		<div class="space__cell">
			Content on left
		</div>
		<div class="space__cell">
			Content in middle
		</div>
		<div class="space__cell">
			Content on right
		</div>
	</div>
```

## Variables and Options

The system contains "_variables.scss" which is a [partial file](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#partials) to control output of the compiled CSS code. All selectors are available as [placeholder-selectors](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_), you can turn off default output of the CSS and just pick and choose which selectors you need by using placeholders and [extend](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend) functionality.

You can also change the block name and element name within "_variables.scss". For example change `$twelve-space--block-name` to equal "grid" for your selectors to be like: `.grid--12`, `.grid__cell`, etc.

The system comes with some helper classes, which is will be a growing library of selectors to use in structure systems. You can turn off these within your options ("_variables.scss") too.



## Helper Classes

There are a serious of helper classes to help assist your structures and your project.

### Display Types

* `%block`, `%show`, `%display-block`, `.block`, `.show`, `.display-block`: `display: block;`
* `%inline-block`, `%display-inline-block`, `.inline-block`, `.display-inline-block`: `display: inline-block;`
* `%inline`, `%display-inline`, `.inline`, `.display-inline`: `display: inline;`
* `%hidden`, `%hide`, `%display-hidden`, `.hidden`, `.hide`, `.display-hidden`: `display: hidden;`
* `%position-relative--` + `#`, `.position-relative--` + `#`: # can be 1-12, # represents the `z-index` with a `position: relative`
* `%position-absolute--` + `#`, `.position-absolute--` + `#`: # can be 1-12, # represents the `z-index` with a `position: absolute`
* `%overflow`, `%overflow-hidden`, `%hidden`, `.overflow-hidden`, `.hidden`: `overflow: hidden;`
* `%overflow-hidden--y`, `%hidden--y`, `.overflow-hidden--y`, `.hidden--y`: `overflow-y: hidden;`
* `%overflow-hidden--x`, `%hidden--x`, `.overflow-hidden-x`, `.hidden--x`: `overflow-x: hidden;`
* `%vertical-align`, `%vertical-align--middle`, `.vertical-align`, `.vertical-align--middle`: `vertical-align: middle;`, use with "space--table__cell" elements
* `%vertical-align--baseline`,  `.vertical-align--baseline`: `vertical-align: baseline;`, use with "space--table__cell" elements
* `%vertical-align--bottom`,  `.vertical-align--bottom`: `vertical-align: bottom;`, use with "space--table__cell" elements
* `%vertical-align--text-bottom`,  `.vertical-align--text-bottom`: `vertical-align: text-bottom;`, use with "space--table__cell" elements
* `%vertical-align--top`,  `.vertical-align--top`: `vertical-align: top;`, use with "space--table__cell" elements
* `%vertical-align--bottom`,  `.vertical-align--bottom`: `vertical-align: bottom;`, use with "space--table__cell" elements
* `%full`, `.full`: `width: 100%;`
  * `img.full`:  `width: 100%` and `display: block`

---

## Contribute

Help find bugs, log issues, log enhancements, or create pull requests. Let's make this something great! Thank you

