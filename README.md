Twelve-Space Structure System [v0.1.0]
=====

This is a structure system for creating containers for content that is based in twelves and not a pixel dimension. The system keeps structures fluid to meet design needs and to allow for flexibility to focus on the context of content.

This repository includes the Sass file for compiling the CSS to be used. The naming convention follows [BEM](bem.info) methodology.

---

## How to Use

(More examples coming soon)

### Basic Structures Using Twelve

Add `grid--12` to block container and add `grid__cell--`+`#` to the element container. The `#` can add up to 12, for example a "two column structure" that has two child containers that are `grid__cell--5` and `grid__cell--7` (adds up to twelve)

### 5-7 Example
```
	<div class="grid--12">
		<div class="grid__cell--5">
			I take up "5 Spaces"
		</div>
		<div class="grid__cell--7">
			I take up "7 Spaces"
		</div>
	</div>
```

### 2-10 Example
```
	<div class="grid--12">
		<div class="grid__cell--2">
			I take up "2 Spaces"
		</div>
		<div class="grid__cell--10">
			I take up "10 Spaces"
		</div>
	</div>
```
### 3-5-4 Example
```
	<div class="grid--12">
		<div class="grid__cell--3">
			I take up "3 Spaces"
		</div>
		<div class="grid__cell--5">
			I take up "5 Spaces"
		</div>
		<div class="grid__cell--4">
			I take up "4 Spaces"
		</div>
	</div>
```

### 2-4-2-4 Example
```
	<div class="grid--12">
		<div class="grid__cell--2">
			I take up "2 Spaces"
		</div>
		<div class="grid__cell--4">
			I take up "4 Spaces"
		</div>
		<div class="grid__cell--2">
			I take up "2 Spaces"
		</div>
		<div class="grid__cell--4">
			I take up "4 Spaces"
		</div>
	</div>
```


### 5-7 Example with Nest of 4-8
```
	<div class="grid--12">
		<div class="grid--12 grid__cell--5">
			<h2>
				I take up "5 Spaces"
			</h2>
			<div class="grid__cell--4">
				I take up "4 Spaces" of "5 Spaces"
			</div>
			<div class="grid__cell--8">
				I take up "8 Spaces" of "5 Spaces"
			</div>
		</div>
		<div class="grid--12 grid__cell--7">
			<h2>
				I take up "7 Spaces"
			</h2>
			<div class="grid__cell--4">
				I take up "4 Spaces" of "7 Spaces"
			</div>
			<div class="grid__cell--8">
				I take up "8 Spaces" of "7 Spaces"
			</div>
		</div>
	</div>
```


## Layering
You can layer a grid "space" on top of another to expand out of it's block container but keep the aspect-ratio of the parent.

Layering can happen at the *block > element level* or *block > element > child level*. Example: `grid__cell--offset--negative--2`
* block > element: Can expand/layer positive or negatively. 
* block > element > child: Can expand/layer positive or negatively. Major difference between is that "child" includes the parent block's modifier and the "offset" is considered an element. Example: `grid__cell--7__offset--negative--2`


### 5-7 Example with nest of 5-7 with child element expanding 2

Use block container's class (ie: `grid__cell--5`) plus `__expand--` plus `#` of spaces:

```
	<div class="grid--12">
		<div class="grid__cell--5">
			<h2 class="grid__cell--5__expand--2">
				I expand 2 spaces
			</h2>
			<p>
				I take up "5 Spaces"
			</p>
		</div>
		<div class="grid__cell--7">
			<p>
				I take up "7 Spaces"
			</p>
		</div>
	</div>
```
### 7-5 Example with child element expanding 2 reverse

Use block container's class (ie: `grid__cell--7`) plus `__offset--negative--` plus `#` of spaces:

```	
	<div class="grid--12">
		<div class="grid__cell--5">
			<p>
				I take up "5 Spaces"
			</p>
		</div>
		<div class="grid__cell--7">
			<h2 class="grid__cell--7__offset--negative--2">
				I expand 2 spaces
			</h2>
			<p>
				I take up "7 Spaces"
			</p>
		</div>
	</div>
```

### 5-7 Example with element offset 2 spaces

Use block container's class (ie: `grid__cell--7`) plus `__offset--negative--` plus `#` of spaces:

```		
	<div class="grid--12">
		<div class="grid__cell--5">
			<p>
				I take up "5 Spaces"
			</p>
		</div>
		<div class="grid__cell--7 grid__cell--offset--negative--2">
			<p>
				I take up "7 Spaces" but offset "2 Spaces" negative
			</p>
		</div>
	</div>
```

### 5-7-2 Example

Wait... 5+7+2=14... YES! But I am offset by "2" spaces making it: 5+7+14-2=12

Use `grid__cell--offset--negative--`+`#` on element container (ie: `grid__cell--offset--negative--2`)

```	
	<div class="grid--12">
		<div class="grid__cell--5">
			<p>
				I take up "5 Spaces"
			</p>
		</div>
		<div class="grid__cell--7 grid__cell--offset--negative--2">
			<p>
				I take up "7 Spaces" but offset "2 Spaces" negative
			</p>
		</div>
		<div class="grid__cell--2">
			<p>
				I take up "2 Spaces"
			</p>
		</div>
	</div>
```

### 5-7 Expanded Example

Yep, you can go outside of the parent container. 

Use block container's class (ie: `grid__cell--7`) plus `__offset--` plus `#` of spaces:


```	
	<div class="grid--12">
		<div class="grid__cell--5">
			<p>
				I take up "5 Spaces"
			</p>
		</div>
		<div class="grid__cell--7">
			<h2 class="grid__cell--7__offset--2">
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

Use block container's class (ie: `grid__cell--5`) plus `__offset--negative--` plus `#` of spaces:


```	
	<div class="grid--12">
		<div class="grid__cell--5">
			<h2 class="grid__cell--5__offset--negative--2">
				I go outside my parent by "2 Spaces"
			</h2>
			<p>
				I take up "5 Spaces"
			</p>
		</div>
		<div class="grid__cell--7">
			<p>
				I take up "7 Spaces"
			</p>
		</div>
	</div>
```




### Additional Structures

#### Width based on inner content
```
	<div class="grid">
		<div class="grid__cell">
			Content on left
		</div>
		<div class="grid__cell">
			Content on right
		</div>
	</div>
```

#### 2 Column - Equal Widths
```
	<div class="grid--equal--two">
		<div class="grid__cell">
			Content on left
		</div>
		<div class="grid__cell">
			Content on right
		</div>
	</div>
```

#### 3 Column - Equal Widths
```
	<div class="grid--equal--three">
		<div class="grid__cell">
			Content on left
		</div>
		<div class="grid__cell">
			Content in middle
		</div>
		<div class="grid__cell">
			Content on right
		</div>
	</div>
```



---

## Browser Support

List of supported browsers coming soon.

---

## Contribute
* Visit the project's... TBD (github most likely)

---

## Issues/Bugs
* Visit the project's... TBD (github most likely)

---

## Future Enhancements
* Future enhancements and updates can be found in `TODO` in the root of the `development` branch
