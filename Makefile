.PHONY: clean deploy dev dist doc lint node_modules publish release storybook test

node_modules:
	@npm install

dev:
	@npx rollup -c -w

dist:
	@npx rollup -c

test:
	@npx jest

watch:
	@npx jest --watch

lint:
	@npx standard

release: dist doc deploy publish

doc:
	@npx build-storybook -c .storybook -o doc

storybook:
	@npx start-storybook -p 9001 -c .storybook --ci

publish:
	@npm publish

deploy:
	@aws s3 sync ./doc/ s3://styleguide.theconversation.com/ --acl public-read --delete --cache-control 'max-age=300'

clean:
	@rm -rf dist doc node_modules
