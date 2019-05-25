import React, { Component } from 'react';

const steps = [
    'step 1',
    'step 2',
    'step 3',
    'step 4',
]

const info = {
    'key1': 'value1',
    'key2': 'value2',
    'key3': 3

}

const relations = [
    {'title': 'father'},
    {'title': 'mother'},
    {'title': 'son'},
    {'title': 'daught'}
]

class MapList extends Component {
    state = {
        rel: relations[0].title,
        gender: 'male',
        children: {},
        img: '',
        form: '',
    }
    onChange = (e) => {
        this.setState({
            rel: e.target.value,
        });
    };
    changeRadio = (e) => {
        this.setState({
            gender: e.target.value,
        })
    };
    changeCheckbox = (e) => {
        const key = e.target.value;
        this.setState((state) => ({
            children: {
                ...state.children,
                [key]: !state.children[key],
            },
        }))
    }
    getFile = e =>{
        const file = e.target.files.item(0);
        const fr = new FileReader();
        fr.addEventListener('load', this.fileLoad);
        fr.readAsDataURL(file);
        this.setState({
            file,
        })
    }
    fileLoad = (e) => {
        this.setState({
            img: e.target.result,
        })
    }
    submit = () => {
        // json base64
        //axios.post('img', {img: this.state.img})

        //multipart
        // const form = new FormData();
        // form.append(this.state.file);
        // axios.post('/img', {form});
        console.log('submit file')
    }
    render() {
        const { rel, gender, children } = this.state;
        return (
            <div>
                <p>Inter List</p>
                {steps.map((text, index) => (
                    <li>
                        {index}: {text}
                    </li>
                ))}

                <p>Inter Object (not in order)</p>
                {Object.keys(info).map((key) => {
                    const value = info[key];
                    return (
                        <li>
                            {key}: {value}
                        </li>
                    )
                    })
                }

                <p>Selector (in order)</p>
                <select value={rel} onChange={this.onChange}>
                    {relations.map((relation) => (
                        <option key={relation.title}>{relation.title}</option>
                    ))}
                </select>
                <h1>{relations.find((r) => r.title === rel).title}</h1>

                <p>Radio</p>
                <label>Male</label>
                <input
                    type="radio"
                    value="male"
                    onChange={this.changeRadio}
                    checked={gender == 'male'}
                />
                <label>Female</label>
                <input
                    type="radio"
                    value="female"
                    onChange={this.changeRadio}
                    checked={gender == 'female'}
                />

                <p>Checkbox</p>
                <label>Son</label>
                <input
                    type="checkbox"
                    value="son"
                    onChange={this.changeCheckbox}
                    checked={children.son}
                />
                <label>Daughter</label>
                <input
                    type="checkbox"
                    value="daughter"
                    onChange={this.changeCheckbox}
                    checked={children.daughter}
                />

                <pre>{JSON.stringify(this.state, null, 2)}</pre>

                <p>Get File</p>
                <input type="file" onChange={this.getFile}/>
                <img width="100%" src={this.state.img} />
                <input type="submit" onChange={this.submit} />
            </div> 
        )
    }
}

export default MapList
