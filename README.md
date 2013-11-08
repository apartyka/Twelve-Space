Twelve-Space Structure System [v0.3.0]
=====

This is a structure system for creating containers for content that is based in twelves and not a pixel dimension. The system keeps structures fluid to meet design needs and to allow for flexibility to focus on the context of content.

The structure system is inspired by traditional grid systems but includes layering and expanding, allowing you to *go off the grid*.

This repository includes the Sass file for compiling the CSS to be used. The naming convention follows [BEM](bem.info) methodology.

---

## How to Use

(More examples coming soon)

### Basic Structures Using Twelve

Add `space--12` to block container and add `space__cell--`+`#` to the element container. The `#` can add up to 12, for example a "two column structure" that has two child containers that are `space__cell--5` and `space__cell--7` (adds up to twelve)

### 5-7 Example
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

### 5-7 Example (Table)
```
	<div class="space--table--12">
		<div class="space__cell--5">
			I take up "5 Spaces"
		</div>
		<div class="space__cell--7">
			I take up "7 Spaces"
		</div>
	</div>
```

### 2-10 Example
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
### 3-5-4 Example
```
	<div class="space--12">
		<div class="space__cell--3">
			I take up "3 Spaces"
		</div>
		<div class="space__cell--5">
			I take up "5 Spaces"
		</div>
		<div class="space__cell--4">
			I take up "4 Spaces"
		</div>
	</div>
```

### 2-4-2-4 Example
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


### 5-7 Example with Nest of 4-8
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

### 5-7 Example with Nest of 4-8 (Table)
```
	<div class="space--table--12">
		<div class="space--table--12 space__cell--5">
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

### 5-7 / 7-5 Example with Nest of 4-8
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

### 5-7 / 7-5 Example with Nest of 4-8 (Table)
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


## Layering
You can layer a space "space" on top of another to expand out of it's block container but keep the aspect-ratio of the parent.

Layering can happen at the *block > element level* or *block > element > child level*. Example: `space__cell--offset--negative--2`
* block > element: Can expand/layer positive or negatively. 
* block > element > child: Can expand/layer positive or negatively. Major difference between is that "child" includes the parent block's modifier and the "offset" is considered an element. Example: `space__cell--7__offset--negative--2`


### 5-7 Example with nest of 5-7 with child element expanding 2

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
### 7-5 Example with child element expanding 2 reverse

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

### 5-7 Example with element offset 2 spaces

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


### 5-7-2 Example

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


### 5-7 Expanded Example

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

### 5-7 Expanded Example (Reverse)

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

**NOTE**: "space__cell--5__offset--negative--2" does not work with Table Version.



### Additional Structures

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

#### 2 Column - Equal Widths
```
	<div class="space--equal--two">
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
	<div class="space--equal--three">
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

