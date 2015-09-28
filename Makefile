serve: node_modules
	@$</serve/bin/serve -Slojp 0

node_modules: package.json
	@npm install
	@ln -sfn .. $@/text-input

.PHONY: serve
